export class JsonBinError extends Error {

    private readonly code: string

    constructor(code?: string, message?: string) {
        super(message);
        this.code = code;
        this.name = "JsonBinError";
    }
}