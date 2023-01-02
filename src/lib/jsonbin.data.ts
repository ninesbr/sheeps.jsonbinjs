
export interface ListInput {
    target: string
    query: { [key: string]: any; }
}

export interface JsonBinConfiguration {
    host: string
    port: number
    insecure?: boolean
    readTimeoutInSeconds?: number
}