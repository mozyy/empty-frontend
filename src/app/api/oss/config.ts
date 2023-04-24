import 'server-only';

const {
  OSS_ACCESS_KEY_ID, OSS_ACCESS_KEY_SECRET, OSS_LOCATION, OSS_BUCKET, OSS_ROLE,
} = process.env;

export const configOSS = {
  accessKeyId: OSS_ACCESS_KEY_ID!,
  accessKeySecret: OSS_ACCESS_KEY_SECRET!,
  role: OSS_ROLE!,

  localtion: OSS_LOCATION!,
  bucket: OSS_BUCKET!,
};
