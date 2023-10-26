import { Pool } from 'sequelize-pool';
import {JsonBin} from "./jsonbin.interface";
import {JsonBinConfiguration} from "./jsonbin.data";
import {New} from "./jsonbin";
import {isEmpty} from "class-validator";

export class JsonBinPool {

    private readonly pool: Pool<JsonBin>;
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
            name: config.poolName || 'jsonStoragePool',
            create: async (): Promise<JsonBin> => {
                return await New({
                    host: config.host,
                    port: config.port,
                    insecure: (config.insecure == undefined) ? true : config?.insecure,
                    accessKey: config.accessKey,
                    readTimeoutInSeconds: config.readTimeoutInSeconds || 30,

                });
            },
            destroy: (conn: JsonBin) => {
                conn.Disconnect();
            },
            validate: (conn: JsonBin): boolean => {
                return conn.IsConnect();
            },
            max: config.poolMax || 2,
            min: config.poolMin || 1,
        });
    }

    public async exec <T>(func: (session: JsonBin) => Promise<T>): Promise<T>  {
        let jsonBin: JsonBin;
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