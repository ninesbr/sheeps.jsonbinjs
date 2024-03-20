import { Pool } from 'sequelize-pool';
import {JsonBinConfiguration} from "../jsonbin.data";
import {isEmpty} from "class-validator";
import { KVInterface } from './jsonbin.keyvalue.interfaces';
import { KVServer } from './jsonbin.kv.server';

export class KeyValuePool {

    private readonly pool: Pool<KVInterface>;
    constructor(config: JsonBinConfiguration) {

        if (isEmpty(config.host)) {
            throw new Error("host is required");
        }

        if (isEmpty(config.port)) {
            throw new Error("port is required");
        }

        if (isEmpty(config.accessKey)) {
            throw new Error("accessKey is required");
        }

        this.pool = new Pool({
            name: config.poolName || 'jsonStorageKeyValuePool',
            create: async (): Promise<KVInterface> => {
                return await KVServer.newInstance({
                    host: config.host,
                    port: config.port,
                    insecure: (config.insecure == undefined) ? true : config?.insecure,
                    accessKey: config.accessKey,
                    readTimeoutInSeconds: config.readTimeoutInSeconds || 30,

                });
            },
            destroy: (conn: KVInterface) => {
                conn.disconnect();
            },
            validate: (conn: KVInterface): boolean => {
                return conn.isConnect();
            },
            max: config.poolMax || 2,
            min: config.poolMin || 1,
        });
    }

    public async exec <T>(func: (session: KVInterface) => Promise<T>): Promise<T>  {
        let jsonBin: KVInterface;
        try {
            jsonBin = await this.pool.acquire();
            return await func(jsonBin);
        } catch (e: any) {
            throw e;
        } finally {
            if (jsonBin) {
                this.pool.release(jsonBin);
            }
        }
    };

    public async destroy(): Promise<void> {
       await this.pool.drain();
       await this.pool.destroyAllNow();
    }

    public async destroyQuietly(): Promise<void> {
        try {
            await this.destroy();
        } catch (e: any) {
            // do nothing
        }
    }
}