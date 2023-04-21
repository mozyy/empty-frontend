// This file is auto-generated, don't edit it
import Sts20150401, * as $Sts20150401 from '@alicloud/sts20150401';
// 依赖的模块可通过下载工程中的模块依赖文件或右上角的获取 SDK 依赖信息查看
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import Util, * as $Util from '@alicloud/tea-util';
import * as $tea from '@alicloud/tea-typescript';

const config = new $OpenApi.Config({
  // 必填，您的 AccessKey ID
  accessKeyId: 'LTAI5tNQ5qFKoGngL5TRpms8',
  // 必填，您的 AccessKey Secret
  accessKeySecret: 'EcQ67iFmJKQmHMpCWqRPuj3LcrRfED',
});
config.endpoint = 'sts.cn-chengdu.aliyuncs.com';
const client = new Sts20150401(config);

export async function POST(request: Request) {
  const assumeRoleRequest = new $Sts20150401.AssumeRoleRequest({
    roleArn: 'acs:ram::1092549119289428:role/oss',
    roleSessionName: 'oss',
    durationSeconds: 3600,
    // policy: 'oss',
  });
  const resp = await client.assumeRoleWithOptions(assumeRoleRequest, new $Util.RuntimeOptions({ }));
  console.log(resp);
  return new Response('Hello, sts!');
}
