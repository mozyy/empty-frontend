/**
 * @fileoverview gRPC-Web generated client stub for sms
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as proto_sms_sms_pb from '../../proto/sms/sms_pb';


export class SMSClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoSend = new grpcWeb.MethodDescriptor(
    '/sms.SMS/Send',
    grpcWeb.MethodType.UNARY,
    proto_sms_sms_pb.SendRequest,
    google_protobuf_empty_pb.Empty,
    (request: proto_sms_sms_pb.SendRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  send(
    request: proto_sms_sms_pb.SendRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  send(
    request: proto_sms_sms_pb.SendRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  send(
    request: proto_sms_sms_pb.SendRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/sms.SMS/Send',
        request,
        metadata || {},
        this.methodInfoSend,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/sms.SMS/Send',
    request,
    metadata || {},
    this.methodInfoSend);
  }

  methodInfoValidation = new grpcWeb.MethodDescriptor(
    '/sms.SMS/Validation',
    grpcWeb.MethodType.UNARY,
    proto_sms_sms_pb.ValidationRequest,
    google_protobuf_empty_pb.Empty,
    (request: proto_sms_sms_pb.ValidationRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  validation(
    request: proto_sms_sms_pb.ValidationRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  validation(
    request: proto_sms_sms_pb.ValidationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  validation(
    request: proto_sms_sms_pb.ValidationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/sms.SMS/Validation',
        request,
        metadata || {},
        this.methodInfoValidation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/sms.SMS/Validation',
    request,
    metadata || {},
    this.methodInfoValidation);
  }

}

