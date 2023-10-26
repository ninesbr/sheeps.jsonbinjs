import {JsonBin} from "./jsonbin.interface";
import {
    DeleteInput,
    DeleteOutput,
    JsonBinConfiguration,
    PatchInput,
    PatchOutput, PingOutput,
    PushInput,
    PushOutput,
    SearchCountOutput,
    SearchInput,
    SearchOutput,
    SearchUniqueInput,
    SearchUniqueOutput,
    StreamEvent
} from "./jsonbin.data";
import {JsonBinServerInterface} from "./jsonbin.server.interfaces";
import {JsonbinServer} from "./jsonbin.server";

export const New = async (config: JsonBinConfiguration): Promise<JsonBin> => {
    const server = new JsonbinServer(config.host, config.port, config.accessKey, config.insecure);
    await server.connect(config.readTimeoutInSeconds);
    return new JsonBinImpl(server);
}

export class JsonBinImpl implements JsonBin {
    private readonly _server: JsonBinServerInterface;

    constructor(server: JsonBinServerInterface) {
        this._server = server;
    }

    CountDocuments(input: SearchInput): Promise<SearchCountOutput> {
        return this._server.countDocuments(input);
    }

    DeleteDocuments(input: DeleteInput): Promise<DeleteOutput> {
        return this._server.drop(input);
    }

    Disconnect() {
        this._server.disconnect();
    }

    IsConnected(): boolean {
        return this._server.isConnect();
    }

    GetDocument(input: SearchUniqueInput): Promise<SearchUniqueOutput> {
        return this._server.document(input);
    }

    GetDocuments(input: SearchInput): Promise<SearchOutput> {
        return this._server.documents(input);
    }

    GetStreamDocuments(input: SearchInput, event: StreamEvent): Promise<void> {
        return this._server.streamDocuments(input, event);
    }

    PatchDocuments(input: PatchInput): Promise<PatchOutput> {
        return this._server.patch(input);
    }

    PushDocuments(input: PushInput): Promise<PushOutput> {
        return this._server.save(input);
    }

    Ping(): Promise<PingOutput>{
        return this._server.ping();
    }

    About(): Promise<any>{
        return this._server.about();
    }
}