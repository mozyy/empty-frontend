import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as gorm_options_gorm_pb from '../../gorm/options/gorm_pb';
import * as gorm_types_types_pb from '../../gorm/types/types_pb';


export class SourcesItem extends jspb.Message {
  getId(): number;
  setId(value: number): SourcesItem;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SourcesItem;
  hasCreatedAt(): boolean;
  clearCreatedAt(): SourcesItem;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SourcesItem;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): SourcesItem;

  getDeletedAt(): gorm_types_types_pb.DeletedAt | undefined;
  setDeletedAt(value?: gorm_types_types_pb.DeletedAt): SourcesItem;
  hasDeletedAt(): boolean;
  clearDeletedAt(): SourcesItem;

  getSourcesItemid(): number;
  setSourcesItemid(value: number): SourcesItem;

  getChildrenList(): Array<SourcesItem>;
  setChildrenList(value: Array<SourcesItem>): SourcesItem;
  clearChildrenList(): SourcesItem;
  addChildren(value?: SourcesItem, index?: number): SourcesItem;

  getKey(): string;
  setKey(value: string): SourcesItem;

  getType(): SourcesItem.Type;
  setType(value: SourcesItem.Type): SourcesItem;

  getIndex(): boolean;
  setIndex(value: boolean): SourcesItem;

  getPath(): string;
  setPath(value: string): SourcesItem;

  getName(): string;
  setName(value: string): SourcesItem;

  getMenu(): boolean;
  setMenu(value: boolean): SourcesItem;

  getIcon(): string;
  setIcon(value: string): SourcesItem;

  getDesc(): string;
  setDesc(value: string): SourcesItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourcesItem.AsObject;
  static toObject(includeInstance: boolean, msg: SourcesItem): SourcesItem.AsObject;
  static serializeBinaryToWriter(message: SourcesItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourcesItem;
  static deserializeBinaryFromReader(message: SourcesItem, reader: jspb.BinaryReader): SourcesItem;
}

export namespace SourcesItem {
  export type AsObject = {
    id: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: gorm_types_types_pb.DeletedAt.AsObject,
    sourcesItemid: number,
    childrenList: Array<SourcesItem.AsObject>,
    key: string,
    type: SourcesItem.Type,
    index: boolean,
    path: string,
    name: string,
    menu: boolean,
    icon: string,
    desc: string,
  }

  export enum Type { 
    ROUTE = 0,
    FUNCTION = 1,
    API = 2,
  }
}

export class ListResponse extends jspb.Message {
  getListList(): Array<SourcesItem>;
  setListList(value: Array<SourcesItem>): ListResponse;
  clearListList(): ListResponse;
  addList(value?: SourcesItem, index?: number): SourcesItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    listList: Array<SourcesItem.AsObject>,
  }
}

