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

export class ListResponse extends jspb.Message {
  getListList(): Array<NewsItem>;
  setListList(value: Array<NewsItem>): ListResponse;
  clearListList(): ListResponse;
  addList(value?: NewsItem, index?: number): NewsItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    listList: Array<NewsItem.AsObject>,
  }
}

export class CategoryResponse extends jspb.Message {
  getCategorysList(): Array<CategoryResponse.CategoryItem>;
  setCategorysList(value: Array<CategoryResponse.CategoryItem>): CategoryResponse;
  clearCategorysList(): CategoryResponse;
  addCategorys(value?: CategoryResponse.CategoryItem, index?: number): CategoryResponse.CategoryItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryResponse): CategoryResponse.AsObject;
  static serializeBinaryToWriter(message: CategoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryResponse;
  static deserializeBinaryFromReader(message: CategoryResponse, reader: jspb.BinaryReader): CategoryResponse;
}

export namespace CategoryResponse {
  export type AsObject = {
    categorysList: Array<CategoryResponse.CategoryItem.AsObject>,
  }

  export class CategoryItem extends jspb.Message {
    getType(): string;
    setType(value: string): CategoryItem;

    getListList(): Array<NewsItem>;
    setListList(value: Array<NewsItem>): CategoryItem;
    clearListList(): CategoryItem;
    addList(value?: NewsItem, index?: number): NewsItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CategoryItem.AsObject;
    static toObject(includeInstance: boolean, msg: CategoryItem): CategoryItem.AsObject;
    static serializeBinaryToWriter(message: CategoryItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CategoryItem;
    static deserializeBinaryFromReader(message: CategoryItem, reader: jspb.BinaryReader): CategoryItem;
  }

  export namespace CategoryItem {
    export type AsObject = {
      type: string,
      listList: Array<NewsItem.AsObject>,
    }
  }

}

export class DetailRequest extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): DetailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DetailRequest): DetailRequest.AsObject;
  static serializeBinaryToWriter(message: DetailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetailRequest;
  static deserializeBinaryFromReader(message: DetailRequest, reader: jspb.BinaryReader): DetailRequest;
}

export namespace DetailRequest {
  export type AsObject = {
    url: string,
  }
}

export class DetailResponse extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): DetailResponse;

  getFrom(): string;
  setFrom(value: string): DetailResponse;

  getTime(): string;
  setTime(value: string): DetailResponse;

  getSummary(): string;
  setSummary(value: string): DetailResponse;

  getContentList(): Array<DetailResponse.DetailContent>;
  setContentList(value: Array<DetailResponse.DetailContent>): DetailResponse;
  clearContentList(): DetailResponse;
  addContent(value?: DetailResponse.DetailContent, index?: number): DetailResponse.DetailContent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DetailResponse): DetailResponse.AsObject;
  static serializeBinaryToWriter(message: DetailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetailResponse;
  static deserializeBinaryFromReader(message: DetailResponse, reader: jspb.BinaryReader): DetailResponse;
}

export namespace DetailResponse {
  export type AsObject = {
    title: string,
    from: string,
    time: string,
    summary: string,
    contentList: Array<DetailResponse.DetailContent.AsObject>,
  }

  export class DetailContent extends jspb.Message {
    getType(): number;
    setType(value: number): DetailContent;

    getContent(): string;
    setContent(value: string): DetailContent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetailContent.AsObject;
    static toObject(includeInstance: boolean, msg: DetailContent): DetailContent.AsObject;
    static serializeBinaryToWriter(message: DetailContent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetailContent;
    static deserializeBinaryFromReader(message: DetailContent, reader: jspb.BinaryReader): DetailContent;
  }

  export namespace DetailContent {
    export type AsObject = {
      type: number,
      content: string,
    }
  }

}

