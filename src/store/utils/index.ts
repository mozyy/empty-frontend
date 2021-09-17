import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

export const emptyParam = new Empty();

export type Params<P = {}> = P & { Authorization: string };

export type RequestId<P = {}> = P & { requestId: string };
