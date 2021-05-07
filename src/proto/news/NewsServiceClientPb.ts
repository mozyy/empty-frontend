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
import * as news_news_pb from '../news/news_pb';


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

  methodInfoList = new grpcWeb.AbstractClientBase.MethodInfo(
    news_news_pb.ListResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    news_news_pb.ListResponse.deserializeBinary
  );

  list(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<news_news_pb.ListResponse>;

  list(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: news_news_pb.ListResponse) => void): grpcWeb.ClientReadableStream<news_news_pb.ListResponse>;

  list(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: news_news_pb.ListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/news.News/List',
        request,
        metadata || {},
        this.methodInfoList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/news.News/List',
    request,
    metadata || {},
    this.methodInfoList);
  }

  methodInfoDetail = new grpcWeb.AbstractClientBase.MethodInfo(
    news_news_pb.DetailResponse,
    (request: news_news_pb.DetailRequest) => {
      return request.serializeBinary();
    },
    news_news_pb.DetailResponse.deserializeBinary
  );

  detail(
    request: news_news_pb.DetailRequest,
    metadata: grpcWeb.Metadata | null): Promise<news_news_pb.DetailResponse>;

  detail(
    request: news_news_pb.DetailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: news_news_pb.DetailResponse) => void): grpcWeb.ClientReadableStream<news_news_pb.DetailResponse>;

  detail(
    request: news_news_pb.DetailRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: news_news_pb.DetailResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/news.News/Detail',
        request,
        metadata || {},
        this.methodInfoDetail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/news.News/Detail',
    request,
    metadata || {},
    this.methodInfoDetail);
  }

}

