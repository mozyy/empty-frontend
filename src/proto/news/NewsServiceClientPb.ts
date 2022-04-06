/**
 * @fileoverview gRPC-Web generated client stub for news
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as proto_news_news_pb from '../../proto/news/news_pb';


export class NewsClient {
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

  methodDescriptorList = new grpcWeb.MethodDescriptor(
    '/news.News/List',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    proto_news_news_pb.ListResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    proto_news_news_pb.ListResponse.deserializeBinary
  );

  list(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<proto_news_news_pb.ListResponse>;

  list(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_news_news_pb.ListResponse) => void): grpcWeb.ClientReadableStream<proto_news_news_pb.ListResponse>;

  list(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_news_news_pb.ListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/news.News/List',
        request,
        metadata || {},
        this.methodDescriptorList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/news.News/List',
    request,
    metadata || {},
    this.methodDescriptorList);
  }

  methodDescriptorDetail = new grpcWeb.MethodDescriptor(
    '/news.News/Detail',
    grpcWeb.MethodType.UNARY,
    proto_news_news_pb.DetailRequest,
    proto_news_news_pb.DetailResponse,
    (request: proto_news_news_pb.DetailRequest) => {
      return request.serializeBinary();
    },
    proto_news_news_pb.DetailResponse.deserializeBinary
  );

  detail(
    request: proto_news_news_pb.DetailRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_news_news_pb.DetailResponse>;

  detail(
    request: proto_news_news_pb.DetailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_news_news_pb.DetailResponse) => void): grpcWeb.ClientReadableStream<proto_news_news_pb.DetailResponse>;

  detail(
    request: proto_news_news_pb.DetailRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_news_news_pb.DetailResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/news.News/Detail',
        request,
        metadata || {},
        this.methodDescriptorDetail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/news.News/Detail',
    request,
    metadata || {},
    this.methodDescriptorDetail);
  }

}

