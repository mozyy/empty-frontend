import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class NewsItem extends jspb.Message {
  getLink(): string;
  setLink(value: string): NewsItem;

  getImage(): string;
  setImage(value: string): NewsItem;

  getTitle(): string;
  setTitle(value: string): NewsItem;

  getTime(): string;
  setTime(value: string): NewsItem;

  getView(): number;
  setView(value: number): NewsItem;

  getComment(): number;
  setComment(value: number): NewsItem;

  getType(): string;
  setType(value: string): NewsItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewsItem.AsObject;
  static toObject(includeInstance: boolean, msg: NewsItem): NewsItem.AsObject;
  static serializeBinaryToWriter(message: NewsItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewsItem;
  static deserializeBinaryFromReader(message: NewsItem, reader: jspb.BinaryReader): NewsItem;
}

export namespace NewsItem {
  export type AsObject = {
    link: string,
    image: string,
    title: string,
    time: string,
    view: number,
    comment: number,
    type: string,
  }
}

export class NewsResponse extends jspb.Message {
  getListList(): Array<NewsItem>;
  setListList(value: Array<NewsItem>): NewsResponse;
  clearListList(): NewsResponse;
  addList(value?: NewsItem, index?: number): NewsItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NewsResponse): NewsResponse.AsObject;
  static serializeBinaryToWriter(message: NewsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewsResponse;
  static deserializeBinaryFromReader(message: NewsResponse, reader: jspb.BinaryReader): NewsResponse;
}

export namespace NewsResponse {
  export type AsObject = {
    listList: Array<NewsItem.AsObject>,
  }
}

export class ListRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListResponse extends jspb.Message {
  getMsg(): string;
  setMsg(value: string): ListResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    msg: string,
  }
}

export class Message extends jspb.Message {
  getSay(): string;
  setSay(value: string): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    say: string,
  }
}

export class Request extends jspb.Message {
  getName(): string;
  setName(value: string): Request;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request.AsObject;
  static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
  static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
  export type AsObject = {
    name: string,
  }
}

export class Response extends jspb.Message {
  getMsg(): string;
  setMsg(value: string): Response;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    msg: string,
  }
}

export class StreamingRequest extends jspb.Message {
  getCount(): number;
  setCount(value: number): StreamingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingRequest): StreamingRequest.AsObject;
  static serializeBinaryToWriter(message: StreamingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingRequest;
  static deserializeBinaryFromReader(message: StreamingRequest, reader: jspb.BinaryReader): StreamingRequest;
}

export namespace StreamingRequest {
  export type AsObject = {
    count: number,
  }
}

export class StreamingResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): StreamingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamingResponse): StreamingResponse.AsObject;
  static serializeBinaryToWriter(message: StreamingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamingResponse;
  static deserializeBinaryFromReader(message: StreamingResponse, reader: jspb.BinaryReader): StreamingResponse;
}

export namespace StreamingResponse {
  export type AsObject = {
    count: number,
  }
}

export class Ping extends jspb.Message {
  getStroke(): number;
  setStroke(value: number): Ping;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ping.AsObject;
  static toObject(includeInstance: boolean, msg: Ping): Ping.AsObject;
  static serializeBinaryToWriter(message: Ping, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ping;
  static deserializeBinaryFromReader(message: Ping, reader: jspb.BinaryReader): Ping;
}

export namespace Ping {
  export type AsObject = {
    stroke: number,
  }
}

export class Pong extends jspb.Message {
  getStroke(): number;
  setStroke(value: number): Pong;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pong.AsObject;
  static toObject(includeInstance: boolean, msg: Pong): Pong.AsObject;
  static serializeBinaryToWriter(message: Pong, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pong;
  static deserializeBinaryFromReader(message: Pong, reader: jspb.BinaryReader): Pong;
}

export namespace Pong {
  export type AsObject = {
    stroke: number,
  }
}

