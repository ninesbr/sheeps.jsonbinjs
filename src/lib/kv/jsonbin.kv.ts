import { JsonBinConfiguration } from "../jsonbin.data";
import { KeyValuePool } from "./json.kv.pool";
import { KVInterface } from "./jsonbin.keyvalue.interfaces";

export class KeyValue {
    private readonly pool: KeyValuePool;

    constructor(pool: KeyValuePool) {
        this.pool = pool;
    }

    public async Get(key: string, cache?: boolean): Promise<string> {
        return await this.pool.exec(async (session: KVInterface) => {
            return await session.get(key, cache);
        });
    }

    public async Set(key: string, value: string, expireAt?: string): Promise<{ key: string, value: string }> {
        return await this.pool.exec(async (session: KVInterface) => {
            return await session.set(key, value, expireAt);
        });
    }

    public async Del(key: string): Promise<string> {
        return await this.pool.exec(async (session: KVInterface) => {
            return await session.del(key);
        });
    }

    public async Disconnect() {
        this.pool.destroyQuietly();
    }

    public static async NewInstance(config: JsonBinConfiguration): Promise<KeyValue> {
        return new KeyValue(new KeyValuePool(config));
    }
}