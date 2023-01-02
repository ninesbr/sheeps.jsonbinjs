// package: pb
// file: message.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as message_pb from "./message_pb";

interface IJsonStorageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getDocuments: IJsonStorageServiceService_IGetDocuments;
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

export const JsonStorageServiceService: IJsonStorageServiceService;

export interface IJsonStorageServiceServer extends grpc.UntypedServiceImplementation {
    getDocuments: grpc.handleUnaryCall<message_pb.GetDocsRequest, message_pb.GetDocsResponse>;
}

export interface IJsonStorageServiceClient {
    getDocuments(request: message_pb.GetDocsRequest, callback: (error: grpc.ServiceError | null, response: message_pb.GetDocsResponse) => void): grpc.ClientUnaryCall;
    getDocuments(request: message_pb.GetDocsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.GetDocsResponse) => void): grpc.ClientUnaryCall;
    getDocuments(request: message_pb.GetDocsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.GetDocsResponse) => void): grpc.ClientUnaryCall;
}

export class JsonStorageServiceClient extends grpc.Client implements IJsonStorageServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getDocuments(request: message_pb.GetDocsRequest, callback: (error: grpc.ServiceError | null, response: message_pb.GetDocsResponse) => void): grpc.ClientUnaryCall;
    public getDocuments(request: message_pb.GetDocsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_pb.GetDocsResponse) => void): grpc.ClientUnaryCall;
    public getDocuments(request: message_pb.GetDocsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_pb.GetDocsResponse) => void): grpc.ClientUnaryCall;
}
