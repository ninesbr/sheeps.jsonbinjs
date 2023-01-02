import {ListInput} from "./jsonbin.data";

export interface JsonBin {

    documents(input: ListInput): Promise<any>;

    disconnect();
}