import {ChannelCredentials, Metadata} from "@grpc/grpc-js";
import {
    CountDocsRequest, DeleteDocsRequest,
    GetDocRequest,
    GetDocsRequest,
    GetDocsStreamResponse,
    PatchDocsRequest, PingRequest,
    PushDocsRequest
} from "./message_pb";
import {
    DeleteInput,
    SearchInput,
    PatchInput,
    PushInput,
    StreamEvent,
    SearchUniqueInput,
    DeleteOutput, PatchOutput, PushOutput, SearchUniqueOutput, SearchCountOutput, SearchOutput, PingOutput
} from "./jsonbin.data";
import {JsonBinServerInterface} from "./jsonbin.server.interfaces";
import {JsonBinError} from "./jsonbin.error";
import {JsonStorageServiceClient} from "./message_grpc_pb";
import {isEmpty, isJWT, isNotEmpty} from "class-validator";
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb.js';

const AccessKeyHeader = "x-access-key";
const AccessKeyNotFound = () => ErrorReject('invalid access key, verify configuration');

const ErrorReject = (msg: string) => Promise.reject(new JsonBinError(msg));


const jsonUnmarshall = (buffer: Uint8Array): { [key: string]: any; } => {
    const jsonString = Buffer.from(buffer).toString('utf8');
    return JSON.parse(jsonString);
}

const jsonsUnmarshall = (buffer: Uint8Array): { [key: string]: any; }[] => {
    const jsonString = Buffer.from(buffer).toString('utf8');
    return JSON.parse(jsonString);
}

export class JsonbinServer implements JsonBinServerInterface {
    private readonly _host: string;
    private readonly _port: number;
    private readonly _insecure: boolean;
    private _selfDisconnect: boolean;
    private _client: JsonStorageServiceClient;
    private readonly _token: string;
    constructor(host: string, port: number, token: string, insecure?: boolean) {
        this._host = host;
        this._port = port;
        this._selfDisconnect = false;
        this._token = token;
        this._insecure = insecure === undefined ? true : insecure;
    }

    connect(waitSeconds?: number): Promise<JsonBinServerInterface> {
        let ops;
        if (this._insecure) {
            ops = ChannelCredentials.createInsecure();
        } else {
            ops = ChannelCredentials.createSsl();
        }
        return new Promise<JsonBinServerInterface>((resolve, reject) => {
            this._client = new JsonStorageServiceClient(`${this._host}:${this._port}`, ops);
            const deadline = new Date();
            deadline.setSeconds(deadline.getSeconds() + (waitSeconds || 5));
            this._client.waitForReady(deadline, (err: Error) => {
                if (err) {
                    reject(new JsonBinError('ServiceUnavailable', err.message));
                    return;
                }
                resolve(this);
            });
        });
    }

    documents(input: SearchInput): Promise<SearchOutput> {

        if (!isJWT(this._token)) {
            return AccessKeyNotFound();
        }

        const req = new GetDocsRequest();
        req.setTarget(input.target);
        for (const [key, value] of Object.entries(input.query)) {
            req.getQueryMap().set(`${key}`, `${value}`);
        }

        if (input.page && input.page.offset) {
            req.getQueryMap().set('offset', `${input.page.offset}`);
        }

        if (input.page && input.page.limit) {
            req.getQueryMap().set('limit', `${input.page.limit}`);
        }

        const m = new Metadata();
        m.set(AccessKeyHeader, this._token)

        return new Promise<SearchOutput>((resolve, reject) => {
            this._client.getDocuments(req, m, (err, res) => {
                if (err) {
                    reject(new JsonBinError(err.message));
                    return;
                }
                resolve({
                    limit: res.getLimit(),
                    offset: res.getOffset(),
                    documents: jsonsUnmarshall(res.getDocuments_asU8())
                });
            });
        });
    }

    countDocuments(input: SearchInput): Promise<SearchCountOutput> {
        if (!isJWT(this._token)) {
            return AccessKeyNotFound();
        }
        const req = new CountDocsRequest();
        req.setTarget(input.target);
        for (const [key, value] of Object.entries(input.query)) {
            req.getQueryMap().set(`${key}`, `${value}`);
        }
        const m = new Metadata();
        m.set(AccessKeyHeader, this._token);
        return new Promise<SearchCountOutput>((resolve, reject) => {
            this._client.countDocuments(req, m, (err, res) => {
                if (err) {
                    reject(new JsonBinError(err.message));
                    return;
                }
                resolve({
                    total: res.getTotal(),
                });
            });
        });
    }

    document(input: SearchUniqueInput): Promise<SearchUniqueOutput> {
        if (!isJWT(this._token)) {
            return AccessKeyNotFound();
        }
        const req = new GetDocRequest();
        req.setTarget(input.target);
        req.setUniqueid(input.uniqueId);

        const m = new Metadata();
        m.set(AccessKeyHeader, this._token)

        return new Promise<SearchUniqueOutput>((resolve, reject) => {
            this._client.getDocument(req, m, (err, res) => {
                if (err) {
                    reject(new JsonBinError(err.message));
                    return;
                }
                resolve({
                    document: jsonUnmarshall(res.getDocument_asU8())
                });
            });
        });
    }

    streamDocuments(input: SearchInput, event: StreamEvent): Promise<void> {
        if (!isJWT(this._token)) {
            return AccessKeyNotFound();
        }
        const req = new GetDocsRequest();
        req.setTarget(input.target);
        for (const [key, value] of Object.entries(input.query)) {
            req.getQueryMap().set(`${key}`, `${value}`);
        }
        const m = new Metadata();
        m.set(AccessKeyHeader, this._token);
        return new Promise<void>((resolve, reject) => {
            const stream = this._client.getStreamDocuments(req, m);
            stream.on('data', (msg: GetDocsStreamResponse) => {
                if (event) {
                    event(jsonUnmarshall(msg.getDocument_asU8()));
                }
            });
            stream.on('error', (err: any) => {
                if (err.code && err.code === 13) {
                    return;
                }
                reject(new JsonBinError('unknown', err.message));
            });
            stream.on('end', () => {
                resolve();
            });
        });
    }

    save(input: PushInput): Promise<PushOutput> {
        if (!isJWT(this._token)) {
            return AccessKeyNotFound();
        }
        const req = new PushDocsRequest();
        req.setTarget(input.target);
        for (const doc of input.documents) {
            req.addDocuments(Buffer.from(JSON.stringify(doc)))
        }
        const m = new Metadata();
        m.set(AccessKeyHeader, this._token)

        return new Promise<PushOutput>((resolve, reject) => {
            this._client.pushDocuments(req, m, (err, res) => {
                if (err) {
                    reject(new JsonBinError(err.message));
                    return;
                }
                resolve({
                    ids: res.getUniqueidsList()
                });
            });
        });
    }

    patch(input: PatchInput): Promise<PatchOutput> {
        if (!isJWT(this._token)) {
            return AccessKeyNotFound();
        }
        const req = new PatchDocsRequest();
        req.setTarget(input.target);
        for (const doc of input.documents) {
            req.addDocuments(Buffer.from(JSON.stringify(doc)))
        }
        const m = new Metadata();
        m.set(AccessKeyHeader, this._token)
        return new Promise<PatchOutput>((resolve, reject) => {
            this._client.patchDocuments(req, m, (err, res) => {
                if (err) {
                    reject(new JsonBinError(err.message));
                    return;
                }
                resolve({
                    ids: res.getUniqueidsList()
                });
            });
        });
    }

    drop(input: DeleteInput): Promise<DeleteOutput> {
        if (!isJWT(this._token)) {
            return AccessKeyNotFound();
        }

        if (isEmpty(input.uniqueIds) && isEmpty(input.prefix)) {
            return ErrorReject('uniqueIds or prefix must be provided.');
        }

        const req = new DeleteDocsRequest();
        req.setTarget(input.target);

        if(isNotEmpty(input.uniqueIds)) {
            for (const uid of input.uniqueIds) {
                req.addUniqueids(uid)
            }
        }

        if (isNotEmpty(input.prefix)) {
            req.setWithprefix(input.prefix);
        }

        const m = new Metadata();
        m.set(AccessKeyHeader, this._token)
        return new Promise<DeleteOutput>((resolve, reject) => {
            this._client.deleteDocuments(req, m, (err, res) => {
                if (err) {
                    reject(new JsonBinError(err.message));
                    return;
                }
                resolve({
                    ids: res.getUniqueidsList(),
                    rowsAffected: res.getRowsaffected()
                });
            });
        });
    }

    disconnect() {
        this._selfDisconnect = true;
        if (this._client) {
            this._client.close();
        }
    }

    ping(): Promise<PingOutput> {
        return new Promise((resolve, reject) => {
            const timestamp = Timestamp.fromDate(new Date());
            const req = new PingRequest()
            req.setNow(timestamp);
            this._client.ping(req, (err, res) => {
                if (err) {
                    reject(new JsonBinError(err.message));
                    return;
                }

                const now = res.getNow();

                resolve({
                    latency: res.getLatency(),
                    now:  now?.toDate(),
                });
            });
        });
    }

    about(): Promise<any> {

        return new Promise((resolve, reject) => {
            this._client.about(new Empty(), (err, res) => {
                if (err) {
                    reject(new JsonBinError(err.message));
                    return;
                }
                const m = {};
                res.getInfoMap().forEach((v: string, k: any) => {
                    m[k] = v;
                })

                resolve(m);
            });
        });
    }

    isConnect(): boolean {
        return this._client && this._client.getChannel().getConnectivityState(false) === 2;
    }
}