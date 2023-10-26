// package: pb
// file: message.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as message_pb from "./message_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IJsonStorageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    about: IJsonStorageServiceService_IAbout;
    ping: IJsonStorageServiceService_IPing;
    getDocument: IJsonStorageServiceService_IGetDocument;
    getDocuments: IJsonStorageServiceService_IGetDocuments;
    getStreamDocuments: IJsonStorageServiceService_IGetStreamDocuments;
    countDocuments: IJsonStorageServiceService_ICountDocuments;
    pushDocuments: IJsonStorageServiceService_IPushDocuments;
    patchDocuments: IJsonStorageServiceService_IPatchDocuments;
    deleteDocuments: IJsonStorageServiceService_IDeleteDocuments;
}

interface IJsonStorageServiceService_IAbout extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, message_pb.AboutResponse> {
    path: "/pb.JsonStorageService/About";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<message_pb.AboutResponse>;
    responseDeserialize: grpc.deserialize<message_pb.AboutResponse>;
}
interface IJsonStorageServiceService_IPing extends grpc.MethodDefinition<message_pb.PingRequest, message_pb.PingResponse> {
    path: "/pb.JsonStorageService/Ping";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<message_pb.PingRequest>;
    requestDeserialize: grpc.deserialize<message_pb.PingRequest>;
    responseSerialize: grpc.serialize<message_pb.PingResponse>;
    responseDeserialize: grpc.deserialize<message_pb.PingResponse>;
}
interface IJsonStorageServiceService_IGetDocument extends grpc.MethodDefinition<message_pb.GetDocRequest, message_pb.GetDocResponse> {
    path: "/pb.JsonStorageService/GetDocument";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<message_pb.GetDocRequest>;
    requestDeserialize: grpc.deserialize<message_pb.GetDocRequest>;
    responseSerialize: grpc.serialize<message_pb.GetDocResponse>;
    responseDeserialize: grpc.deserialize<message_pb.GetDocResponse>;
}
interface IJsonStorageServiceService_IGetDocuments extends grpc.MethodDefinition<message_pb.GetDocsRequest, message_pb.GetDocsResponse> {
    path: "/pb.JsonStorageService/GetDocuments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<message_pb.GetDocsRequest>;
    requestDeserialize: grpc.deserialize<message_pb.GetDocsRequest>;
    responseSerialize: grpc.serialize<message_pb.GetDocsResponse>;
    responseDeserialize: grpc.deserialize<message_pb.GetDocsResponse>;
}
interface IJsonStorageServiceService_IGetStreamDocuments extends grpc.MethodDefinition<message_pb.GetDocsRequest, message_pb.GetDocsStreamResponse> {
    path: "/pb.JsonStorageService/GetStreamDocuments";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<message_pb.GetDocsRequest>;
    requestDeserialize: grpc.deserialize<message_pb.GetDocsRequest>;
    responseSerialize: grpc.serialize<message_pb.GetDocsStreamResponse>;
    responseDeserialize: grpc.deserialize<message_pb.GetDocsStreamResponse>;
}
interface IJsonStorageServiceService_ICountDocuments extends grpc.MethodDefinition<message_pb.CountDocsRequest, message_pb.CountDocsResponse> {
    path: "/pb.JsonStorageService/CountDocuments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<message_pb.CountDocsRequest>;
    requestDeserialize: grpc.deserialize<message_pb.CountDocsRequest>;
    responseSerialize: grpc.serialize<message_pb.CountDocsResponse>;
    responseDeserialize: grpc.deserialize<message_pb.CountDocsResponse>;
}
interface IJsonStorageServiceService_IPushDocuments extends grpc.MethodDefinition<message_pb.PushDocsRequest, message_pb.PushDocsResponse> {
    path: "/pb.JsonStorageService/PushDocuments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<message_pb.PushDocsRequest>;
    requestDeserialize: grpc.deserialize<message_pb.PushDocsRequest>;
    responseSerialize: grpc.serialize<message_pb.PushDocsResponse>;
    responseDeserialize: grpc.deserialize<message_pb.PushDocsResponse>;
}
interface IJsonStorageServiceService_IPatchDocuments extends grpc.MethodDefinition<message_pb.PatchDocsRequest, message_pb.PatchDocsResponse> {
    path: "/pb.JsonStorageService/PatchDocuments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<message_pb.PatchDocsRequest>;
    requestDeserialize: grpc.deserialize<message_pb.PatchDocsRequest>;
    responseSerialize: grpc.serialize<message_pb.PatchDocsResponse>;
    responseDeserialize: grpc.deserialize<message_pb.PatchDocsResponse>;
}
interface IJsonStorageServiceService_IDeleteDocuments extends grpc.MethodDefinition<message_pb.DeleteDocsRequest, message_pb.DeleteDocsResponse> {
    path: "/pb.JsonStorageService/DeleteDocuments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<message_pb.DeleteDocsRequest>;
    requestDeserialize: grpc.deserialize<message_pb.DeleteDocsRequest>;
    responseSerialize: grpc.serialize<message_pb.DeleteDocsResponse>;
    responseDeserialize: grpc.deserialize<message_pb.DeleteDocsResponse>;
}

export const JsonStorageServiceService: IJsonStorageServiceService;

export interface IJsonStorageServiceServer extends grpc.UntypedServiceImplementation {
    about: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, message_pb.AboutResponse>;
    ping: grpc.handleUnaryCall<message_pb.PingRequest, message_pb.PingResponse>;
    getDocument: grpc.handleUnaryCall<message_pb.GetDocRequest, message_pb.GetDocResponse>;
    getDocuments: grpc.handleUnaryCall<message_pb.GetDocsRequest, message_pb.GetDocsResponse>;
    getStreamDocuments: grpc.handleServerStreamingCall<message_pb.GetDocsRequest, message_pb.GetDocsStreamResponse>;
    countDocuments: grpc.handleUnaryCall<message_pb.CountDocsRequest, message_pb.CountDocsResponse>;
    pushDocuments: grpc.handleUnaryCall<message_pb.PushDocsRequest, message_pb.PushDocsResponse>;
    patchDocuments: grpc.handleUnaryCall<message_pb.PatchDocsRequest, message_pb.PatchDocsResponse>;
    deleteDocuments: grpc.handleUnaryCall<message_pb.DeleteDocsRequest, message_pb.DeleteDocsResponse>;
}

export interface IJsonStorageServiceClient {
    about(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: message_pb.AboutResponse) => void): grpc.ClientUnaryCall;
    about(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.AboutResponse) => void): grpc.ClientUnaryCall;
    about(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.AboutResponse) => void): grpc.ClientUnaryCall;
    ping(request: message_pb.PingRequest, callback: (error: grpc.ServiceError | null, response: message_pb.PingResponse) => void): grpc.ClientUnaryCall;
    ping(request: message_pb.PingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.PingResponse) => void): grpc.ClientUnaryCall;
    ping(request: message_pb.PingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.PingResponse) => void): grpc.ClientUnaryCall;
    getDocument(request: message_pb.GetDocRequest, callback: (error: grpc.ServiceError | null, response: message_pb.GetDocResponse) => void): grpc.ClientUnaryCall;
    getDocument(request: message_pb.GetDocRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.GetDocResponse) => void): grpc.ClientUnaryCall;
    getDocument(request: message_pb.GetDocRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.GetDocResponse) => void): grpc.ClientUnaryCall;
    getDocuments(request: message_pb.GetDocsRequest, callback: (error: grpc.ServiceError | null, response: message_pb.GetDocsResponse) => void): grpc.ClientUnaryCall;
    getDocuments(request: message_pb.GetDocsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.GetDocsResponse) => void): grpc.ClientUnaryCall;
    getDocuments(request: message_pb.GetDocsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.GetDocsResponse) => void): grpc.ClientUnaryCall;
    getStreamDocuments(request: message_pb.GetDocsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<message_pb.GetDocsStreamResponse>;
    getStreamDocuments(request: message_pb.GetDocsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<message_pb.GetDocsStreamResponse>;
    countDocuments(request: message_pb.CountDocsRequest, callback: (error: grpc.ServiceError | null, response: message_pb.CountDocsResponse) => void): grpc.ClientUnaryCall;
    countDocuments(request: message_pb.CountDocsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.CountDocsResponse) => void): grpc.ClientUnaryCall;
    countDocuments(request: message_pb.CountDocsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.CountDocsResponse) => void): grpc.ClientUnaryCall;
    pushDocuments(request: message_pb.PushDocsRequest, callback: (error: grpc.ServiceError | null, response: message_pb.PushDocsResponse) => void): grpc.ClientUnaryCall;
    pushDocuments(request: message_pb.PushDocsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.PushDocsResponse) => void): grpc.ClientUnaryCall;
    pushDocuments(request: message_pb.PushDocsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.PushDocsResponse) => void): grpc.ClientUnaryCall;
    patchDocuments(request: message_pb.PatchDocsRequest, callback: (error: grpc.ServiceError | null, response: message_pb.PatchDocsResponse) => void): grpc.ClientUnaryCall;
    patchDocuments(request: message_pb.PatchDocsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.PatchDocsResponse) => void): grpc.ClientUnaryCall;
    patchDocuments(request: message_pb.PatchDocsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.PatchDocsResponse) => void): grpc.ClientUnaryCall;
    deleteDocuments(request: message_pb.DeleteDocsRequest, callback: (error: grpc.ServiceError | null, response: message_pb.DeleteDocsResponse) => void): grpc.ClientUnaryCall;
    deleteDocuments(request: message_pb.DeleteDocsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.DeleteDocsResponse) => void): grpc.ClientUnaryCall;
    deleteDocuments(request: message_pb.DeleteDocsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.DeleteDocsResponse) => void): grpc.ClientUnaryCall;
}

export class JsonStorageServiceClient extends grpc.Client implements IJsonStorageServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public about(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: message_pb.AboutResponse) => void): grpc.ClientUnaryCall;
    public about(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.AboutResponse) => void): grpc.ClientUnaryCall;
    public about(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.AboutResponse) => void): grpc.ClientUnaryCall;
    public ping(request: message_pb.PingRequest, callback: (error: grpc.ServiceError | null, response: message_pb.PingResponse) => void): grpc.ClientUnaryCall;
    public ping(request: message_pb.PingRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.PingResponse) => void): grpc.ClientUnaryCall;
    public ping(request: message_pb.PingRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.PingResponse) => void): grpc.ClientUnaryCall;
    public getDocument(request: message_pb.GetDocRequest, callback: (error: grpc.ServiceError | null, response: message_pb.GetDocResponse) => void): grpc.ClientUnaryCall;
    public getDocument(request: message_pb.GetDocRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.GetDocResponse) => void): grpc.ClientUnaryCall;
    public getDocument(request: message_pb.GetDocRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.GetDocResponse) => void): grpc.ClientUnaryCall;
    public getDocuments(request: message_pb.GetDocsRequest, callback: (error: grpc.ServiceError | null, response: message_pb.GetDocsResponse) => void): grpc.ClientUnaryCall;
    public getDocuments(request: message_pb.GetDocsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.GetDocsResponse) => void): grpc.ClientUnaryCall;
    public getDocuments(request: message_pb.GetDocsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.GetDocsResponse) => void): grpc.ClientUnaryCall;
    public getStreamDocuments(request: message_pb.GetDocsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<message_pb.GetDocsStreamResponse>;
    public getStreamDocuments(request: message_pb.GetDocsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<message_pb.GetDocsStreamResponse>;
    public countDocuments(request: message_pb.CountDocsRequest, callback: (error: grpc.ServiceError | null, response: message_pb.CountDocsResponse) => void): grpc.ClientUnaryCall;
    public countDocuments(request: message_pb.CountDocsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.CountDocsResponse) => void): grpc.ClientUnaryCall;
    public countDocuments(request: message_pb.CountDocsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.CountDocsResponse) => void): grpc.ClientUnaryCall;
    public pushDocuments(request: message_pb.PushDocsRequest, callback: (error: grpc.ServiceError | null, response: message_pb.PushDocsResponse) => void): grpc.ClientUnaryCall;
    public pushDocuments(request: message_pb.PushDocsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.PushDocsResponse) => void): grpc.ClientUnaryCall;
    public pushDocuments(request: message_pb.PushDocsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.PushDocsResponse) => void): grpc.ClientUnaryCall;
    public patchDocuments(request: message_pb.PatchDocsRequest, callback: (error: grpc.ServiceError | null, response: message_pb.PatchDocsResponse) => void): grpc.ClientUnaryCall;
    public patchDocuments(request: message_pb.PatchDocsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.PatchDocsResponse) => void): grpc.ClientUnaryCall;
    public patchDocuments(request: message_pb.PatchDocsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.PatchDocsResponse) => void): grpc.ClientUnaryCall;
    public deleteDocuments(request: message_pb.DeleteDocsRequest, callback: (error: grpc.ServiceError | null, response: message_pb.DeleteDocsResponse) => void): grpc.ClientUnaryCall;
    public deleteDocuments(request: message_pb.DeleteDocsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.DeleteDocsResponse) => void): grpc.ClientUnaryCall;
    public deleteDocuments(request: message_pb.DeleteDocsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.DeleteDocsResponse) => void): grpc.ClientUnaryCall;
}
