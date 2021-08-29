import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as protoc$gen$orm_orm_orm_pb from '../../protoc-gen-orm/orm/orm_pb';


export class Conf extends jspb.Message {
  getId(): number;
  setId(value: number): Conf;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Conf;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Conf;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Conf;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Conf;

  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): Conf;
  hasDeletedAt(): boolean;
  clearDeletedAt(): Conf;

  getType(): string;
  setType(value: string): Conf;

  getValue(): string;
  setValue(value: string): Conf;

  getContent(): string;
  setContent(value: string): Conf;

  getDesc(): string;
  setDesc(value: string): Conf;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Conf.AsObject;
  static toObject(includeInstance: boolean, msg: Conf): Conf.AsObject;
  static serializeBinaryToWriter(message: Conf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Conf;
  static deserializeBinaryFromReader(message: Conf, reader: jspb.BinaryReader): Conf;
}

export namespace Conf {
  export type AsObject = {
    id: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    type: string,
    value: string,
    content: string,
    desc: string,
  }
}

