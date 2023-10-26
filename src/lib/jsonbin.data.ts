export type StreamEvent = (document: { [key: string]: any; }) => void;

export interface SearchInput {
    target?: string
    query: { [key: string]: any; }
    page?: {
        offset?: number,
        limit?: number
    }
}

export interface SearchUniqueInput {
    uniqueId: string
    target?: string
}

export interface PushInput {
    target?: string
    documents: { [key: string]: any; }[]
}

export interface PatchInput {
    target?: string
    documents: { [key: string]: any; }[]
}

export interface DeleteInput {
    target?: string
    uniqueIds?: string[]
    prefix?: string;
}

export interface SearchOutput {
    limit: number;
    offset: number;
    documents: { [key: string]: any; }[];
}

export interface SearchCountOutput {
    total: number;
}

export interface SearchUniqueOutput {
    document: { [key: string]: any; }
}

export interface PushOutput {
    ids: string[];
}

export interface PatchOutput {
    ids: string[];
}

export interface DeleteOutput {
    ids?: string[];
    rowsAffected?: number;
}

export interface PingOutput {
    latency: number;
    now: Date;
}

export interface JsonBinConfiguration {
    host: string
    port: number
    insecure?: boolean
    accessKey?: string
    readTimeoutInSeconds?: number
    poolName?: string
    poolMin?: number
    poolMax?: number
}
