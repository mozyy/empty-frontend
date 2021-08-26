import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class OAuthToken extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): OAuthToken;

  getTokenType(): string;
  setTokenType(value: string): OAuthToken;

  getRefreshToken(): string;
  setRefreshToken(value: string): OAuthToken;

  getExpiresSeconds(): number;
  setExpiresSeconds(value: number): OAuthToken;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuthToken.AsObject;
  static toObject(includeInstance: boolean, msg: OAuthToken): OAuthToken.AsObject;
  static serializeBinaryToWriter(message: OAuthToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuthToken;
  static deserializeBinaryFromReader(message: OAuthToken, reader: jspb.BinaryReader): OAuthToken;
}

export namespace OAuthToken {
  export type AsObject = {
    accessToken: string,
    tokenType: string,
    refreshToken: string,
    expiresSeconds: number,
  }
}

export class OAuthClient extends jspb.Message {
  getId(): number;
  setId(value: number): OAuthClient;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): OAuthClient;
  hasCreatedAt(): boolean;
  clearCreatedAt(): OAuthClient;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): OAuthClient;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): OAuthClient;

  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): OAuthClient;
  hasDeletedAt(): boolean;
  clearDeletedAt(): OAuthClient;

  getSecret(): string;
  setSecret(value: string): OAuthClient;

  getDomain(): string;
  setDomain(value: string): OAuthClient;

  getUserId(): string;
  setUserId(value: string): OAuthClient;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuthClient.AsObject;
  static toObject(includeInstance: boolean, msg: OAuthClient): OAuthClient.AsObject;
  static serializeBinaryToWriter(message: OAuthClient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuthClient;
  static deserializeBinaryFromReader(message: OAuthClient, reader: jspb.BinaryReader): OAuthClient;
}

export namespace OAuthClient {
  export type AsObject = {
    id: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    secret: string,
    domain: string,
    userId: string,
  }
}

