/**
 * @fileoverview gRPC-Web generated client stub for manage
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as proto_manage_sources_pb from '../../proto/manage/sources_pb';


export class SourcesClient {
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

  methodDescriptorCreate = new grpcWeb.MethodDescriptor(
    '/manage.Sources/Create',
    grpcWeb.MethodType.UNARY,
    proto_manage_sources_pb.SourcesItem,
    google_protobuf_empty_pb.Empty,
    (request: proto_manage_sources_pb.SourcesItem) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  create(
    request: proto_manage_sources_pb.SourcesItem,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  create(
    request: proto_manage_sources_pb.SourcesItem,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  create(
    request: proto_manage_sources_pb.SourcesItem,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/manage.Sources/Create',
        request,
        metadata || {},
        this.methodDescriptorCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/manage.Sources/Create',
    request,
    metadata || {},
    this.methodDescriptorCreate);
  }

  methodDescriptorList = new grpcWeb.MethodDescriptor(
    '/manage.Sources/List',
    grpcWeb.MethodType.UNARY,
    proto_manage_sources_pb.SourcesItem,
    proto_manage_sources_pb.ListResponse,
    (request: proto_manage_sources_pb.SourcesItem) => {
      return request.serializeBinary();
    },
    proto_manage_sources_pb.ListResponse.deserializeBinary
  );

  list(
    request: proto_manage_sources_pb.SourcesItem,
    metadata: grpcWeb.Metadata | null): Promise<proto_manage_sources_pb.ListResponse>;

  list(
    request: proto_manage_sources_pb.SourcesItem,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_manage_sources_pb.ListResponse) => void): grpcWeb.ClientReadableStream<proto_manage_sources_pb.ListResponse>;

  list(
    request: proto_manage_sources_pb.SourcesItem,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_manage_sources_pb.ListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/manage.Sources/List',
        request,
        metadata || {},
        this.methodDescriptorList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/manage.Sources/List',
    request,
    metadata || {},
    this.methodDescriptorList);
  }

}

