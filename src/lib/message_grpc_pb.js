// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var message_pb = require('./message_pb.js');

function serialize_pb_GetDocsRequest(arg) {
  if (!(arg instanceof message_pb.GetDocsRequest)) {
    throw new Error('Expected argument of type pb.GetDocsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetDocsRequest(buffer_arg) {
  return message_pb.GetDocsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetDocsResponse(arg) {
  if (!(arg instanceof message_pb.GetDocsResponse)) {
    throw new Error('Expected argument of type pb.GetDocsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetDocsResponse(buffer_arg) {
  return message_pb.GetDocsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// message StreamDocsRequest {}
//
// message CountDocsRequest {}
//
// message PushDocRequest {}
//
// message PatchDocRequest {}
//
// message DeleteDocsRequest {}
//
var JsonStorageServiceService = exports.JsonStorageServiceService = {
  getDocuments: {
    path: '/pb.JsonStorageService/GetDocuments',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.GetDocsRequest,
    responseType: message_pb.GetDocsResponse,
    requestSerialize: serialize_pb_GetDocsRequest,
    requestDeserialize: deserialize_pb_GetDocsRequest,
    responseSerialize: serialize_pb_GetDocsResponse,
    responseDeserialize: deserialize_pb_GetDocsResponse,
  },
};

exports.JsonStorageServiceClient = grpc.makeGenericClientConstructor(JsonStorageServiceService);
