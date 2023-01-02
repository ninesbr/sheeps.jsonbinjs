import {JsonBin} from "./jsonbin.interface";
import {JsonBinConfiguration, ListInput} from "./jsonbin.data";
import {JsonBinServerInterface} from "./jsonbin.server.interfaces";
import {JsonbinServer} from "./jsonbin.server";

export const New = async (config: JsonBinConfiguration): Promise<JsonBin> => {
    const server = new JsonbinServer(config.host, config.port, config.insecure);
    await server.connect(config.readTimeoutInSeconds);
    return new JsonBinImpl(server);
}

export class JsonBinImpl implements JsonBin {
    private readonly _server: JsonBinServerInterface;

    constructor(server: JsonBinServerInterface) {
        this._server = server;
    }

    documents(input: ListInput): Promise<any> {
        return this._server.documents(input);
    }

    disconnect() {
        this._server.disconnect();
    }

}