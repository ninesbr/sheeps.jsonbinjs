export interface KVInterface {
    connect(waitSeconds?: number): Promise<KVInterface>;
    get(key: string, cache?: boolean): Promise<string>;
    set(key: string, value: string, expireAt?: string): Promise<{key: string, value: string}>;
    del(key: string): Promise<string>;
    disconnect(): void;
    isConnect(): boolean;
}