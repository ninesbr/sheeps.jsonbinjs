// package: pb
// file: message.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class CountDocsRequest extends jspb.Message { 
    getTarget(): string;
    setTarget(value: string): CountDocsRequest;

    getQueryMap(): jspb.Map<string, string>;
    clearQueryMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CountDocsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CountDocsRequest): CountDocsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CountDocsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CountDocsRequest;
    static deserializeBinaryFromReader(message: CountDocsRequest, reader: jspb.BinaryReader): CountDocsRequest;
}

export namespace CountDocsRequest {
    export type AsObject = {
        target: string,

        queryMap: Array<[string, string]>,
    }
}

export class GetDocsRequest extends jspb.Message { 
    getTarget(): string;
    setTarget(value: string): GetDocsRequest;

    getQueryMap(): jspb.Map<string, string>;
    clearQueryMap(): void;

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
    }
}

export class GetDocRequest extends jspb.Message { 
    getTarget(): string;
    setTarget(value: string): GetDocRequest;
    getUniqueid(): string;
    setUniqueid(value: string): GetDocRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDocRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDocRequest): GetDocRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDocRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDocRequest;
    static deserializeBinaryFromReader(message: GetDocRequest, reader: jspb.BinaryReader): GetDocRequest;
}

export namespace GetDocRequest {
    export type AsObject = {
        target: string,
        uniqueid: string,
    }
}

export class PushDocsRequest extends jspb.Message { 
    getTarget(): string;
    setTarget(value: string): PushDocsRequest;
    clearDocumentsList(): void;
    getDocumentsList(): Array<Uint8Array | string>;
    getDocumentsList_asU8(): Array<Uint8Array>;
    getDocumentsList_asB64(): Array<string>;
    setDocumentsList(value: Array<Uint8Array | string>): PushDocsRequest;
    addDocuments(value: Uint8Array | string, index?: number): Uint8Array | string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PushDocsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PushDocsRequest): PushDocsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PushDocsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PushDocsRequest;
    static deserializeBinaryFromReader(message: PushDocsRequest, reader: jspb.BinaryReader): PushDocsRequest;
}

export namespace PushDocsRequest {
    export type AsObject = {
        target: string,
        documentsList: Array<Uint8Array | string>,
    }
}

export class DeleteDocsRequest extends jspb.Message { 
    getTarget(): string;
    setTarget(value: string): DeleteDocsRequest;
    clearUniqueidsList(): void;
    getUniqueidsList(): Array<string>;
    setUniqueidsList(value: Array<string>): DeleteDocsRequest;
    addUniqueids(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDocsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDocsRequest): DeleteDocsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDocsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDocsRequest;
    static deserializeBinaryFromReader(message: DeleteDocsRequest, reader: jspb.BinaryReader): DeleteDocsRequest;
}

export namespace DeleteDocsRequest {
    export type AsObject = {
        target: string,
        uniqueidsList: Array<string>,
    }
}

export class PatchDocsRequest extends jspb.Message { 
    getTarget(): string;
    setTarget(value: string): PatchDocsRequest;
    clearDocumentsList(): void;
    getDocumentsList(): Array<Uint8Array | string>;
    getDocumentsList_asU8(): Array<Uint8Array>;
    getDocumentsList_asB64(): Array<string>;
    setDocumentsList(value: Array<Uint8Array | string>): PatchDocsRequest;
    addDocuments(value: Uint8Array | string, index?: number): Uint8Array | string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchDocsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PatchDocsRequest): PatchDocsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchDocsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchDocsRequest;
    static deserializeBinaryFromReader(message: PatchDocsRequest, reader: jspb.BinaryReader): PatchDocsRequest;
}

export namespace PatchDocsRequest {
    export type AsObject = {
        target: string,
        documentsList: Array<Uint8Array | string>,
    }
}

export class CountDocsResponse extends jspb.Message { 
    getTotal(): number;
    setTotal(value: number): CountDocsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CountDocsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CountDocsResponse): CountDocsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CountDocsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CountDocsResponse;
    static deserializeBinaryFromReader(message: CountDocsResponse, reader: jspb.BinaryReader): CountDocsResponse;
}

export namespace CountDocsResponse {
    export type AsObject = {
        total: number,
    }
}

export class GetDocsResponse extends jspb.Message { 
    getDocuments(): Uint8Array | string;
    getDocuments_asU8(): Uint8Array;
    getDocuments_asB64(): string;
    setDocuments(value: Uint8Array | string): GetDocsResponse;
    getLimit(): number;
    setLimit(value: number): GetDocsResponse;
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
        documents: Uint8Array | string,
        limit: number,
        offset: number,
    }
}

export class GetDocsStreamResponse extends jspb.Message { 
    getDocument(): Uint8Array | string;
    getDocument_asU8(): Uint8Array;
    getDocument_asB64(): string;
    setDocument(value: Uint8Array | string): GetDocsStreamResponse;
    getLimit(): number;
    setLimit(value: number): GetDocsStreamResponse;
    getOffset(): number;
    setOffset(value: number): GetDocsStreamResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDocsStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDocsStreamResponse): GetDocsStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDocsStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDocsStreamResponse;
    static deserializeBinaryFromReader(message: GetDocsStreamResponse, reader: jspb.BinaryReader): GetDocsStreamResponse;
}

export namespace GetDocsStreamResponse {
    export type AsObject = {
        document: Uint8Array | string,
        limit: number,
        offset: number,
    }
}

export class GetDocResponse extends jspb.Message { 
    getDocument(): Uint8Array | string;
    getDocument_asU8(): Uint8Array;
    getDocument_asB64(): string;
    setDocument(value: Uint8Array | string): GetDocResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDocResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDocResponse): GetDocResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDocResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDocResponse;
    static deserializeBinaryFromReader(message: GetDocResponse, reader: jspb.BinaryReader): GetDocResponse;
}

export namespace GetDocResponse {
    export type AsObject = {
        document: Uint8Array | string,
    }
}

export class PushDocsResponse extends jspb.Message { 
    clearUniqueidsList(): void;
    getUniqueidsList(): Array<string>;
    setUniqueidsList(value: Array<string>): PushDocsResponse;
    addUniqueids(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PushDocsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PushDocsResponse): PushDocsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PushDocsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PushDocsResponse;
    static deserializeBinaryFromReader(message: PushDocsResponse, reader: jspb.BinaryReader): PushDocsResponse;
}

export namespace PushDocsResponse {
    export type AsObject = {
        uniqueidsList: Array<string>,
    }
}

export class DeleteDocsResponse extends jspb.Message { 
    clearUniqueidsList(): void;
    getUniqueidsList(): Array<string>;
    setUniqueidsList(value: Array<string>): DeleteDocsResponse;
    addUniqueids(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteDocsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteDocsResponse): DeleteDocsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteDocsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteDocsResponse;
    static deserializeBinaryFromReader(message: DeleteDocsResponse, reader: jspb.BinaryReader): DeleteDocsResponse;
}

export namespace DeleteDocsResponse {
    export type AsObject = {
        uniqueidsList: Array<string>,
    }
}

export class PatchDocsResponse extends jspb.Message { 
    clearUniqueidsList(): void;
    getUniqueidsList(): Array<string>;
    setUniqueidsList(value: Array<string>): PatchDocsResponse;
    addUniqueids(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchDocsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PatchDocsResponse): PatchDocsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchDocsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchDocsResponse;
    static deserializeBinaryFromReader(message: PatchDocsResponse, reader: jspb.BinaryReader): PatchDocsResponse;
}

export namespace PatchDocsResponse {
    export type AsObject = {
        uniqueidsList: Array<string>,
    }
}
