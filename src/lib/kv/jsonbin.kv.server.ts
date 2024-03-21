import {ChannelCredentials, Metadata, status} from "@grpc/grpc-js";
import { KVInterface } from "./jsonbin.keyvalue.interfaces";
import {JsonBinError} from "../jsonbin.error";
import {KeyValueServiceClient} from "../message_grpc_pb";
import {isJWT} from "class-validator";
import { DelRequest, GetRequest, SetRequest } from "../message_pb";
import { JsonBinConfiguration } from "../jsonbin.data";

export class KVServer implements KVInterface {
    
    private static readonly AccessKeyHeader = "x-access-key";

    private readonly _host: string;
    private readonly _port: number;
    private readonly _insecure: boolean;
    private _client: KeyValueServiceClient;
    private readonly _token: string;

    constructor(host: string, port: number, token: string, insecure?: boolean) {
        this._host = host;
        this._port = port;
        this._token = token;
        this._insecure = insecure === undefined ? true : insecure;
    }


    connect(waitSeconds?: number): Promise<KVInterface> {
        let ops;
        if (this._insecure) {
            ops = ChannelCredentials.createInsecure();
        } else {
            ops = ChannelCredentials.createSsl();
        }
        return new Promise<KVInterface>((resolve, reject) => {
            this._client = new KeyValueServiceClient(`${this._host}:${this._port}`, ops);
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

    getMetadata(): Metadata {
        if (!isJWT(this._token)) {
            throw new JsonBinError('invalid access key, verify configuration');
        }
        const m = new Metadata();
        m.set(KVServer.AccessKeyHeader, this._token);
        return m;
    }

    get(key: string, cache: boolean = true): Promise<string> {
        const m = this.getMetadata();
        const req = new GetRequest();
        req.setKey(key);
        req.setCache(cache);
        return new Promise<string>((resolve, reject) => {
            this._client.get(req, m, (err: any, res) => {
                if (err) {
                    reject(new JsonBinError(status[err?.code], err.details));
                    return;
                }
                resolve(res.getValue());
            });
        });
    }

    set(key: string, value: string, expireAt?: string): Promise<{ key: string; value: string; }> {
        const m = this.getMetadata();
        const req = new SetRequest();
        req.setKey(key);
        req.setValue(value);
        req.setExpireat(expireAt || "");
        return new Promise<{ key: string; value: string; }>((resolve, reject) => {
            this._client.set(req, m, (err, res) => {
                if (err) {
                    reject(new JsonBinError(err.message));
                    return;
                }
                resolve({
                    key: res.getKey(),
                    value: res.getValue()
                });
            });
        });
    }

    del(key: string): Promise<string> {
        const m = this.getMetadata();
        const req = new DelRequest();
        req.setKey(key);
        return new Promise<string>((resolve, reject) => {
            this._client.delete(req, m, (err, res) => {
                if (err) {
                    reject(new JsonBinError(err.message));
                    return;
                }
                resolve(res.getKey());
            });
        });
    }

    disconnect() {
        if (this._client) {
            this._client.close();
        }
    }

    isConnect(): boolean {
        return this._client && this._client.getChannel().getConnectivityState(false) === 2;
    }

    public static async newInstance(config: JsonBinConfiguration): Promise<KVInterface> {
        const server = new KVServer(config.host, config.port, config.accessKey, config.insecure);
        await server.connect(config.readTimeoutInSeconds);
        return server;
    }
}