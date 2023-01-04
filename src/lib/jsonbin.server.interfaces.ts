import {
    SearchInput,
    PushInput,
    StreamEvent,
    SearchUniqueInput,
    PatchInput,
    DeleteInput,
    DeleteOutput, PatchOutput, PushOutput, SearchUniqueOutput, SearchOutput, SearchCountOutput
} from "./jsonbin.data";

export interface JsonBinServerInterface {
    connect(waitSeconds?: number): Promise<JsonBinServerInterface>;

    documents(input: SearchInput): Promise<SearchOutput>;

    countDocuments(input: SearchInput): Promise<SearchCountOutput>;

    document(input: SearchUniqueInput): Promise<SearchUniqueOutput>;

    streamDocuments(input: SearchInput, event: StreamEvent): Promise<void>;

    save(input: PushInput): Promise<PushOutput>;

    patch(input: PatchInput): Promise<PatchOutput>;

    drop(input: DeleteInput): Promise<DeleteOutput>;

    disconnect();
}