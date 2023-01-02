// package: pb
// file: message.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetDocsRequest extends jspb.Message { 
    getTarget(): string;
    setTarget(value: string): GetDocsRequest;

    getQueryMap(): jspb.Map<string, string>;
    clearQueryMap(): void;
    getLimit(): number;
    setLimit(value: number): GetDocsRequest;
    getOffset(): number;
    setOffset(value: number): GetDocsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDocsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDocsRequest): GetDocsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDocsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDocsRequest;
    static deserializeBinaryFromReader(message: GetDocsRequest, reader: jspb.BinaryReader): GetDocsRequest;
}

export namespace GetDocsRequest {
    export type AsObject = {
        target: string,

        queryMap: Array<[string, string]>,
        limit: number,
        offset: number,
    }
}

export class GetDocsResponse extends jspb.Message { 
    getDocs(): Uint8Array | string;
    getDocs_asU8(): Uint8Array;
    getDocs_asB64(): string;
    setDocs(value: Uint8Array | string): GetDocsResponse;
    getCount(): number;
    setCount(value: number): GetDocsResponse;
    getOffset(): number;
    setOffset(value: number): GetDocsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDocsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDocsResponse): GetDocsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDocsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDocsResponse;
    static deserializeBinaryFromReader(message: GetDocsResponse, reader: jspb.BinaryReader): GetDocsResponse;
}

export namespace GetDocsResponse {
    export type AsObject = {
        docs: Uint8Array | string,
        count: number,
        offset: number,
    }
}
