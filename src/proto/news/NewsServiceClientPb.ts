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

  methodInfoNews = new grpcWeb.AbstractClientBase.MethodInfo(
    news_news_pb.NewsItem,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    news_news_pb.NewsItem.deserializeBinary
  );

  news(
    request: google_protobuf_empty_pb.Empty,
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
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    news_news_pb.NewsResponse.deserializeBinary
  );

  newsList(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<news_news_pb.NewsResponse>;

  newsList(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: news_news_pb.NewsResponse) => void): grpcWeb.ClientReadableStream<news_news_pb.NewsResponse>;

  newsList(
    request: google_protobuf_empty_pb.Empty,
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

  methodInfoCall = new grpcWeb.AbstractClientBase.MethodInfo(
    news_news_pb.Response,
    (request: news_news_pb.Request) => {
      return request.serializeBinary();
    },
    news_news_pb.Response.deserializeBinary
  );

  call(
    request: news_news_pb.Request,
    metadata: grpcWeb.Metadata | null): Promise<news_news_pb.Response>;

  call(
    request: news_news_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: news_news_pb.Response) => void): grpcWeb.ClientReadableStream<news_news_pb.Response>;

  call(
    request: news_news_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: news_news_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/news.News/Call',
        request,
        metadata || {},
        this.methodInfoCall,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/news.News/Call',
    request,
    metadata || {},
    this.methodInfoCall);
  }

  methodInfoStream = new grpcWeb.AbstractClientBase.MethodInfo(
    news_news_pb.StreamingResponse,
    (request: news_news_pb.StreamingRequest) => {
      return request.serializeBinary();
    },
    news_news_pb.StreamingResponse.deserializeBinary
  );

  stream(
    request: news_news_pb.StreamingRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/news.News/Stream',
      request,
      metadata || {},
      this.methodInfoStream);
  }

}

export class EmptyClient {
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

  methodInfoNews = new grpcWeb.AbstractClientBase.MethodInfo(
    news_news_pb.NewsItem,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    news_news_pb.NewsItem.deserializeBinary
  );

  news(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/news.Empty/News',
      request,
      metadata || {},
      this.methodInfoNews);
  }

  methodInfoNewsList = new grpcWeb.AbstractClientBase.MethodInfo(
    news_news_pb.NewsResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    news_news_pb.NewsResponse.deserializeBinary
  );

  newsList(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<news_news_pb.NewsResponse>;

  newsList(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: news_news_pb.NewsResponse) => void): grpcWeb.ClientReadableStream<news_news_pb.NewsResponse>;

  newsList(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: news_news_pb.NewsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/news.Empty/NewsList',
        request,
        metadata || {},
        this.methodInfoNewsList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/news.Empty/NewsList',
    request,
    metadata || {},
    this.methodInfoNewsList);
  }

  methodInfoCall = new grpcWeb.AbstractClientBase.MethodInfo(
    news_news_pb.Response,
    (request: news_news_pb.Request) => {
      return request.serializeBinary();
    },
    news_news_pb.Response.deserializeBinary
  );

  call(
    request: news_news_pb.Request,
    metadata: grpcWeb.Metadata | null): Promise<news_news_pb.Response>;

  call(
    request: news_news_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: news_news_pb.Response) => void): grpcWeb.ClientReadableStream<news_news_pb.Response>;

  call(
    request: news_news_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: news_news_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/news.Empty/Call',
        request,
        metadata || {},
        this.methodInfoCall,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/news.Empty/Call',
    request,
    metadata || {},
    this.methodInfoCall);
  }

  methodInfoStream = new grpcWeb.AbstractClientBase.MethodInfo(
    news_news_pb.StreamingResponse,
    (request: news_news_pb.StreamingRequest) => {
      return request.serializeBinary();
    },
    news_news_pb.StreamingResponse.deserializeBinary
  );

  stream(
    request: news_news_pb.StreamingRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/news.Empty/Stream',
      request,
      metadata || {},
      this.methodInfoStream);
  }

}

