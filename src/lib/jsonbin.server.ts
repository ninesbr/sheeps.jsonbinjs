import {ChannelCredentials} from "@grpc/grpc-js";
import {GetDocsRequest} from "./message_pb";
import {ListInput} from "./jsonbin.data";
import {JsonBinServerInterface} from "./jsonbin.server.interfaces";
import {JsonBinError} from "./jsonbin.error";
import {JsonStorageServiceClient} from "./message_grpc_pb";

const jsonUnmarshall = (buffer: Uint8Array): { [key: string]: any; } => {
    const jsonString = Buffer.from(buffer).toString('utf8')
    return JSON.parse(jsonString)
}

export class JsonbinServer implements JsonBinServerInterface {
    private readonly _host: string;
    private readonly _port: number;
    private readonly _insecure: boolean;
    private _selfDisconnect: boolean;

    private _client: JsonStorageServiceClient;

    constructor(host: string, port: number, insecure?: boolean) {
        this._host = host;
        this._port = port;
        this._selfDisconnect = false;
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

    documents(input: ListInput): Promise<any> {
        const req = new GetDocsRequest();
        req.setTarget(input.target);
        for (const [key, value] of Object.entries(input.query)) {
            req.getQueryMap().set(key, `${value}`);
        }
        return new Promise((resolve, reject) => {
            this._client.getDocuments(req, (err, res) => {
                if (err) {
                    reject(new JsonBinError(err.message));
                    return;
                }

                resolve(jsonUnmarshall(res.getDocs_asU8()));
            });
        });
    }

    disconnect() {
        this._selfDisconnect = true;
        if (this._client) {
            this._client.close();
        }
    }
}