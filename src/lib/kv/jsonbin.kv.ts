import { JsonBinConfiguration } from "../jsonbin.data";
import { KeyValuePool } from "./json.kv.pool";
import { KVInterface } from "./jsonbin.keyvalue.interfaces";
import { caching, Cache } from "cache-manager";
import parse from 'parse-duration'

export class KeyValue {
    private readonly pool: KeyValuePool;
    private readonly cache: Cache;

    constructor(pool: KeyValuePool, cache: Cache) {
        this.pool = pool;
        this.cache = cache;
    }

    public async Get(key: string, cache: boolean = true): Promise<string | null> {
        if (cache) {
            const cached = await this.cache.get(key);
            if (cached) {
                return cached as string;
            }
        }
        return await this.pool.exec(async (session: KVInterface) => {
            const st = await session.get(key, cache).catch((e) => {
                if (e && e?.code === "NOT_FOUND") {
                    return null;
                }
                throw e;
            });

            if (st) {
                await this.cache.set(key, st);
            }

            return st;
        });
    }

    public async Set(key: string, value: string, expireAt?: string): Promise<{ key: string, value: string }> {
        let expireAtMs = 0;
        if (expireAt) {
            expireAtMs = parse(expireAt);
            if (expireAtMs == null) {
                throw new Error("expireAt is not a valid duration, unit types are: " +
                    "nanoseconds (ns), microseconds (μs), milliseconds (ms), seconds (s, sec), minutes (m, min), hours (h, hr)");
            }
        }
        return await this.pool.exec(async (session: KVInterface) => {
            const st = await session.set(key, value, expireAt);
            await this.cache.set(key, value, { ttl: expireAtMs });
            return st;
        });
    }

    public async Del(key: string): Promise<string> {
        return await this.pool.exec(async (session: KVInterface) => {
            const st = await session.del(key);
            await this.cache.del(key);
            return st;
        });
    }

    public async Disconnect() {
        this.pool.destroyQuietly();
    }

    public async ClearCache() {
        await this.cache.reset();
    }
    
    public static async NewInstance(config: JsonBinConfiguration): Promise<KeyValue> {
        const memoryCache: Cache = caching({
            store: 'memory',
            max: 5 * 1024,            
        });
        return new KeyValue(new KeyValuePool(config), memoryCache);
    }
}