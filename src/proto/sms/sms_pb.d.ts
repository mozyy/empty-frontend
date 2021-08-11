import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class SendRequest extends jspb.Message {
  getMobile(): string;
  setMobile(value: string): SendRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendRequest): SendRequest.AsObject;
  static serializeBinaryToWriter(message: SendRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendRequest;
  static deserializeBinaryFromReader(message: SendRequest, reader: jspb.BinaryReader): SendRequest;
}

export namespace SendRequest {
  export type AsObject = {
    mobile: string,
  }
}

export class ValidationRequest extends jspb.Message {
  getMobile(): string;
  setMobile(value: string): ValidationRequest;

  getCode(): string;
  setCode(value: string): ValidationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidationRequest): ValidationRequest.AsObject;
  static serializeBinaryToWriter(message: ValidationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidationRequest;
  static deserializeBinaryFromReader(message: ValidationRequest, reader: jspb.BinaryReader): ValidationRequest;
}

export namespace ValidationRequest {
  export type AsObject = {
    mobile: string,
    code: string,
  }
}

