import * as jspb from 'google-protobuf'



export class EmptyMsg extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyMsg.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyMsg): EmptyMsg.AsObject;
  static serializeBinaryToWriter(message: EmptyMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyMsg;
  static deserializeBinaryFromReader(message: EmptyMsg, reader: jspb.BinaryReader): EmptyMsg;
}

export namespace EmptyMsg {
  export type AsObject = {
  }
}

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

