/**
 * @fileoverview gRPC-Web generated client stub for news
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

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
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoHello = new grpcWeb.AbstractClientBase.MethodInfo(
    news_news_pb.HelloResponse,
    (request: news_news_pb.HelloRequest) => {
      return request.serializeBinary();
    },
    news_news_pb.HelloResponse.deserializeBinary
  );

  hello(
    request: news_news_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null): Promise<news_news_pb.HelloResponse>;

  hello(
    request: news_news_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: news_news_pb.HelloResponse) => void): grpcWeb.ClientReadableStream<news_news_pb.HelloResponse>;

  hello(
    request: news_news_pb.HelloRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: news_news_pb.HelloResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/news.News/Hello',
        request,
        metadata || {},
        this.methodInfoHello,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/news.News/Hello',
    request,
    metadata || {},
    this.methodInfoHello);
  }

  methodInfoNews = new grpcWeb.AbstractClientBase.MethodInfo(
    news_news_pb.NewsItem,
    (request: news_news_pb.EmptyMsg) => {
      return request.serializeBinary();
    },
    news_news_pb.NewsItem.deserializeBinary
  );

  news(
    request: news_news_pb.EmptyMsg,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/news.News/News',
      request,
      metadata || {},
      this.methodInfoNews);
  }

  methodInfoNewsList = new grpcWeb.AbstractClientBase.MethodInfo(
    news_news_pb.NewsResponse,
    (request: news_news_pb.EmptyMsg) => {
      return request.serializeBinary();
    },
    news_news_pb.NewsResponse.deserializeBinary
  );

  newsList(
    request: news_news_pb.EmptyMsg,
    metadata: grpcWeb.Metadata | null): Promise<news_news_pb.NewsResponse>;

  newsList(
    request: news_news_pb.EmptyMsg,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: news_news_pb.NewsResponse) => void): grpcWeb.ClientReadableStream<news_news_pb.NewsResponse>;

  newsList(
    request: news_news_pb.EmptyMsg,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: news_news_pb.NewsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/news.News/NewsList',
        request,
        metadata || {},
        this.methodInfoNewsList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/news.News/NewsList',
    request,
    metadata || {},
    this.methodInfoNewsList);
  }

}

