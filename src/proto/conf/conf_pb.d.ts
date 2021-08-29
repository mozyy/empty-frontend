import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as protoc$gen$orm_orm_orm_pb from '../../protoc-gen-orm/orm/orm_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as proto_model_oauth_pb from '../../proto/model/oauth_pb';


export class Config extends jspb.Message {
  getId(): number;
  setId(value: number): Config;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Config;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Config;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Config;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Config;

  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): Config;
  hasDeletedAt(): boolean;
  clearDeletedAt(): Config;

  getType(): string;
  setType(value: string): Config;

  getValue(): string;
  setValue(value: string): Config;

  getContent(): string;
  setContent(value: string): Config;

  getDesc(): string;
  setDesc(value: string): Config;

  getOAuthToken(): proto_model_oauth_pb.OAuthToken | undefined;
  setOAuthToken(value?: proto_model_oauth_pb.OAuthToken): Config;
  hasOAuthToken(): boolean;
  clearOAuthToken(): Config;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Config.AsObject;
  static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
  static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Config;
  static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
}

export namespace Config {
  export type AsObject = {
    id: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    type: string,
    value: string,
    content: string,
    desc: string,
    oAuthToken?: proto_model_oauth_pb.OAuthToken.AsObject,
  }
}

export class DeleteType extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteType.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteType): DeleteType.AsObject;
  static serializeBinaryToWriter(message: DeleteType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteType;
  static deserializeBinaryFromReader(message: DeleteType, reader: jspb.BinaryReader): DeleteType;
}

export namespace DeleteType {
  export type AsObject = {
    id: number,
  }
}

export class CreateRequest extends jspb.Message {
  getPayload(): Config | undefined;
  setPayload(value?: Config): CreateRequest;
  hasPayload(): boolean;
  clearPayload(): CreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    payload?: Config.AsObject,
  }
}

export class CreateResponse extends jspb.Message {
  getResults(): Config | undefined;
  setResults(value?: Config): CreateResponse;
  hasResults(): boolean;
  clearResults(): CreateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
  static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResponse;
  static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
  export type AsObject = {
    results?: Config.AsObject,
  }
}

export class ReadRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ReadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadRequest): ReadRequest.AsObject;
  static serializeBinaryToWriter(message: ReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadRequest;
  static deserializeBinaryFromReader(message: ReadRequest, reader: jspb.BinaryReader): ReadRequest;
}

export namespace ReadRequest {
  export type AsObject = {
    id: number,
  }
}

export class ListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
  }
}

export class ListResponse extends jspb.Message {
  getResultsList(): Array<Config>;
  setResultsList(value: Array<Config>): ListResponse;
  clearResultsList(): ListResponse;
  addResults(value?: Config, index?: number): Config;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    resultsList: Array<Config.AsObject>,
  }
}

export class InfoResponse extends jspb.Message {
  getName(): string;
  setName(value: string): InfoResponse;

  getMobile(): string;
  setMobile(value: string): InfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InfoResponse): InfoResponse.AsObject;
  static serializeBinaryToWriter(message: InfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoResponse;
  static deserializeBinaryFromReader(message: InfoResponse, reader: jspb.BinaryReader): InfoResponse;
}

export namespace InfoResponse {
  export type AsObject = {
    name: string,
    mobile: string,
  }
}

export class DeleteRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequest;
  static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
  export type AsObject = {
    id: number,
  }
}

