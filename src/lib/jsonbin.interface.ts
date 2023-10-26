import {
    DeleteInput,
    DeleteOutput,
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

export interface JsonBin {

    GetDocuments(input: SearchInput): Promise<SearchOutput>;

    CountDocuments(input: SearchInput): Promise<SearchCountOutput>;

    GetDocument(input: SearchUniqueInput): Promise<SearchUniqueOutput>;

    GetStreamDocuments(input: SearchInput, event: StreamEvent): Promise<void>;

    PushDocuments(input: PushInput): Promise<PushOutput>;

    PatchDocuments(input: PatchInput): Promise<PatchOutput>;

    DeleteDocuments(input: DeleteInput): Promise<DeleteOutput>;

    Disconnect();

    IsConnected(): boolean;

    Ping(): Promise<PingOutput>;

    About(): Promise<any>;
}