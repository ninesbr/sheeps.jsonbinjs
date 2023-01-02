import {ListInput} from "./jsonbin.data";

export interface JsonBinServerInterface {
    connect(waitSeconds?: number): Promise<JsonBinServerInterface>;

    documents(input: ListInput): Promise<any>;

    disconnect();
}