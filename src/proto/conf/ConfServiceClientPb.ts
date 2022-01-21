/**
 * @fileoverview gRPC-Web generated client stub for conf
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_conf_conf_pb from '../../proto/conf/conf_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class ConfClient {
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

  methodInfoCreate = new grpcWeb.MethodDescriptor(
    '/conf.Conf/Create',
    grpcWeb.MethodType.UNARY,
    proto_conf_conf_pb.CreateRequest,
    proto_conf_conf_pb.CreateResponse,
    (request: proto_conf_conf_pb.CreateRequest) => {
      return request.serializeBinary();
    },
    proto_conf_conf_pb.CreateResponse.deserializeBinary
  );

  create(
    request: proto_conf_conf_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_conf_conf_pb.CreateResponse>;

  create(
    request: proto_conf_conf_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_conf_conf_pb.CreateResponse) => void): grpcWeb.ClientReadableStream<proto_conf_conf_pb.CreateResponse>;

  create(
    request: proto_conf_conf_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_conf_conf_pb.CreateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/conf.Conf/Create',
        request,
        metadata || {},
        this.methodInfoCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/conf.Conf/Create',
    request,
    metadata || {},
    this.methodInfoCreate);
  }

  methodInfoUpdate = new grpcWeb.MethodDescriptor(
    '/conf.Conf/Update',
    grpcWeb.MethodType.UNARY,
    proto_conf_conf_pb.CreateRequest,
    proto_conf_conf_pb.CreateResponse,
    (request: proto_conf_conf_pb.CreateRequest) => {
      return request.serializeBinary();
    },
    proto_conf_conf_pb.CreateResponse.deserializeBinary
  );

  update(
    request: proto_conf_conf_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_conf_conf_pb.CreateResponse>;

  update(
    request: proto_conf_conf_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_conf_conf_pb.CreateResponse) => void): grpcWeb.ClientReadableStream<proto_conf_conf_pb.CreateResponse>;

  update(
    request: proto_conf_conf_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_conf_conf_pb.CreateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/conf.Conf/Update',
        request,
        metadata || {},
        this.methodInfoUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/conf.Conf/Update',
    request,
    metadata || {},
    this.methodInfoUpdate);
  }

  methodInfoRead = new grpcWeb.MethodDescriptor(
    '/conf.Conf/Read',
    grpcWeb.MethodType.UNARY,
    proto_conf_conf_pb.ReadRequest,
    proto_conf_conf_pb.CreateResponse,
    (request: proto_conf_conf_pb.ReadRequest) => {
      return request.serializeBinary();
    },
    proto_conf_conf_pb.CreateResponse.deserializeBinary
  );

  read(
    request: proto_conf_conf_pb.ReadRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_conf_conf_pb.CreateResponse>;

  read(
    request: proto_conf_conf_pb.ReadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_conf_conf_pb.CreateResponse) => void): grpcWeb.ClientReadableStream<proto_conf_conf_pb.CreateResponse>;

  read(
    request: proto_conf_conf_pb.ReadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_conf_conf_pb.CreateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/conf.Conf/Read',
        request,
        metadata || {},
        this.methodInfoRead,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/conf.Conf/Read',
    request,
    metadata || {},
    this.methodInfoRead);
  }

  methodInfoList = new grpcWeb.MethodDescriptor(
    '/conf.Conf/List',
    grpcWeb.MethodType.UNARY,
    proto_conf_conf_pb.ListRequest,
    proto_conf_conf_pb.ListResponse,
    (request: proto_conf_conf_pb.ListRequest) => {
      return request.serializeBinary();
    },
    proto_conf_conf_pb.ListResponse.deserializeBinary
  );

  list(
    request: proto_conf_conf_pb.ListRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_conf_conf_pb.ListResponse>;

  list(
    request: proto_conf_conf_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_conf_conf_pb.ListResponse) => void): grpcWeb.ClientReadableStream<proto_conf_conf_pb.ListResponse>;

  list(
    request: proto_conf_conf_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_conf_conf_pb.ListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/conf.Conf/List',
        request,
        metadata || {},
        this.methodInfoList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/conf.Conf/List',
    request,
    metadata || {},
    this.methodInfoList);
  }

  methodInfoDelete = new grpcWeb.MethodDescriptor(
    '/conf.Conf/Delete',
    grpcWeb.MethodType.UNARY,
    proto_conf_conf_pb.DeleteRequest,
    google_protobuf_empty_pb.Empty,
    (request: proto_conf_conf_pb.DeleteRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  delete(
    request: proto_conf_conf_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  delete(
    request: proto_conf_conf_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  delete(
    request: proto_conf_conf_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/conf.Conf/Delete',
        request,
        metadata || {},
        this.methodInfoDelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/conf.Conf/Delete',
    request,
    metadata || {},
    this.methodInfoDelete);
  }

  methodInfoCustom = new grpcWeb.MethodDescriptor(
    '/conf.Conf/Custom',
    grpcWeb.MethodType.UNARY,
    proto_conf_conf_pb.DeleteRequest,
    google_protobuf_empty_pb.Empty,
    (request: proto_conf_conf_pb.DeleteRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  custom(
    request: proto_conf_conf_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  custom(
    request: proto_conf_conf_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  custom(
    request: proto_conf_conf_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/conf.Conf/Custom',
        request,
        metadata || {},
        this.methodInfoCustom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/conf.Conf/Custom',
    request,
    metadata || {},
    this.methodInfoCustom);
  }

}

