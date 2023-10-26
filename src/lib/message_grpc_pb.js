// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var message_pb = require('./message_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_AboutResponse(arg) {
  if (!(arg instanceof message_pb.AboutResponse)) {
    throw new Error('Expected argument of type pb.AboutResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_AboutResponse(buffer_arg) {
  return message_pb.AboutResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_CountDocsRequest(arg) {
  if (!(arg instanceof message_pb.CountDocsRequest)) {
    throw new Error('Expected argument of type pb.CountDocsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CountDocsRequest(buffer_arg) {
  return message_pb.CountDocsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_CountDocsResponse(arg) {
  if (!(arg instanceof message_pb.CountDocsResponse)) {
    throw new Error('Expected argument of type pb.CountDocsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CountDocsResponse(buffer_arg) {
  return message_pb.CountDocsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_DeleteDocsRequest(arg) {
  if (!(arg instanceof message_pb.DeleteDocsRequest)) {
    throw new Error('Expected argument of type pb.DeleteDocsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_DeleteDocsRequest(buffer_arg) {
  return message_pb.DeleteDocsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_DeleteDocsResponse(arg) {
  if (!(arg instanceof message_pb.DeleteDocsResponse)) {
    throw new Error('Expected argument of type pb.DeleteDocsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_DeleteDocsResponse(buffer_arg) {
  return message_pb.DeleteDocsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetDocRequest(arg) {
  if (!(arg instanceof message_pb.GetDocRequest)) {
    throw new Error('Expected argument of type pb.GetDocRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetDocRequest(buffer_arg) {
  return message_pb.GetDocRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetDocResponse(arg) {
  if (!(arg instanceof message_pb.GetDocResponse)) {
    throw new Error('Expected argument of type pb.GetDocResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetDocResponse(buffer_arg) {
  return message_pb.GetDocResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_pb_GetDocsStreamResponse(arg) {
  if (!(arg instanceof message_pb.GetDocsStreamResponse)) {
    throw new Error('Expected argument of type pb.GetDocsStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetDocsStreamResponse(buffer_arg) {
  return message_pb.GetDocsStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_PatchDocsRequest(arg) {
  if (!(arg instanceof message_pb.PatchDocsRequest)) {
    throw new Error('Expected argument of type pb.PatchDocsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_PatchDocsRequest(buffer_arg) {
  return message_pb.PatchDocsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_PatchDocsResponse(arg) {
  if (!(arg instanceof message_pb.PatchDocsResponse)) {
    throw new Error('Expected argument of type pb.PatchDocsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_PatchDocsResponse(buffer_arg) {
  return message_pb.PatchDocsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_PingRequest(arg) {
  if (!(arg instanceof message_pb.PingRequest)) {
    throw new Error('Expected argument of type pb.PingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_PingRequest(buffer_arg) {
  return message_pb.PingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_PingResponse(arg) {
  if (!(arg instanceof message_pb.PingResponse)) {
    throw new Error('Expected argument of type pb.PingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_PingResponse(buffer_arg) {
  return message_pb.PingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_PushDocsRequest(arg) {
  if (!(arg instanceof message_pb.PushDocsRequest)) {
    throw new Error('Expected argument of type pb.PushDocsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_PushDocsRequest(buffer_arg) {
  return message_pb.PushDocsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_PushDocsResponse(arg) {
  if (!(arg instanceof message_pb.PushDocsResponse)) {
    throw new Error('Expected argument of type pb.PushDocsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_PushDocsResponse(buffer_arg) {
  return message_pb.PushDocsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var JsonStorageServiceService = exports.JsonStorageServiceService = {
  about: {
    path: '/pb.JsonStorageService/About',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: message_pb.AboutResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_pb_AboutResponse,
    responseDeserialize: deserialize_pb_AboutResponse,
  },
  ping: {
    path: '/pb.JsonStorageService/Ping',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.PingRequest,
    responseType: message_pb.PingResponse,
    requestSerialize: serialize_pb_PingRequest,
    requestDeserialize: deserialize_pb_PingRequest,
    responseSerialize: serialize_pb_PingResponse,
    responseDeserialize: deserialize_pb_PingResponse,
  },
  getDocument: {
    path: '/pb.JsonStorageService/GetDocument',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.GetDocRequest,
    responseType: message_pb.GetDocResponse,
    requestSerialize: serialize_pb_GetDocRequest,
    requestDeserialize: deserialize_pb_GetDocRequest,
    responseSerialize: serialize_pb_GetDocResponse,
    responseDeserialize: deserialize_pb_GetDocResponse,
  },
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
  getStreamDocuments: {
    path: '/pb.JsonStorageService/GetStreamDocuments',
    requestStream: false,
    responseStream: true,
    requestType: message_pb.GetDocsRequest,
    responseType: message_pb.GetDocsStreamResponse,
    requestSerialize: serialize_pb_GetDocsRequest,
    requestDeserialize: deserialize_pb_GetDocsRequest,
    responseSerialize: serialize_pb_GetDocsStreamResponse,
    responseDeserialize: deserialize_pb_GetDocsStreamResponse,
  },
  countDocuments: {
    path: '/pb.JsonStorageService/CountDocuments',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.CountDocsRequest,
    responseType: message_pb.CountDocsResponse,
    requestSerialize: serialize_pb_CountDocsRequest,
    requestDeserialize: deserialize_pb_CountDocsRequest,
    responseSerialize: serialize_pb_CountDocsResponse,
    responseDeserialize: deserialize_pb_CountDocsResponse,
  },
  pushDocuments: {
    path: '/pb.JsonStorageService/PushDocuments',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.PushDocsRequest,
    responseType: message_pb.PushDocsResponse,
    requestSerialize: serialize_pb_PushDocsRequest,
    requestDeserialize: deserialize_pb_PushDocsRequest,
    responseSerialize: serialize_pb_PushDocsResponse,
    responseDeserialize: deserialize_pb_PushDocsResponse,
  },
  patchDocuments: {
    path: '/pb.JsonStorageService/PatchDocuments',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.PatchDocsRequest,
    responseType: message_pb.PatchDocsResponse,
    requestSerialize: serialize_pb_PatchDocsRequest,
    requestDeserialize: deserialize_pb_PatchDocsRequest,
    responseSerialize: serialize_pb_PatchDocsResponse,
    responseDeserialize: deserialize_pb_PatchDocsResponse,
  },
  deleteDocuments: {
    path: '/pb.JsonStorageService/DeleteDocuments',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.DeleteDocsRequest,
    responseType: message_pb.DeleteDocsResponse,
    requestSerialize: serialize_pb_DeleteDocsRequest,
    requestDeserialize: deserialize_pb_DeleteDocsRequest,
    responseSerialize: serialize_pb_DeleteDocsResponse,
    responseDeserialize: deserialize_pb_DeleteDocsResponse,
  },
};

exports.JsonStorageServiceClient = grpc.makeGenericClientConstructor(JsonStorageServiceService);
