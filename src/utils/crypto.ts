import CryptoJs from 'crypto-js';

const a = '2a4ac92b';
const b = '8217a77a';
const c = '44bf0314';
const d = 'c4e1b101';
const key = CryptoJs.enc.Utf8.parse(`${a}${b}`);
const iv = CryptoJs.enc.Utf8.parse(`${c}${d}`);
/**
 * AES加密
 * @param  {[type]} prama     [description]
 * @param  {[type]} timestamp [description]
 * @return {[type]}           [description]
 */
export function enctypeAes(prama:string, timestamp: string) {
  // 成产key
  const KeyStr = CryptoJs.SHA256(timestamp).toString().substring(0, 16);
  const encKey = CryptoJs.enc.Utf8.parse(KeyStr);
  // 生产 iv
  const ivStr = CryptoJs.SHA256(KeyStr + timestamp).toString().substring(0, 16);
  const encIv = CryptoJs.enc.Utf8.parse(ivStr);
  // 加密
  const encryptResult = CryptoJs.AES.encrypt(JSON.stringify(prama), encKey, {
    iv: encIv,
    mode: CryptoJs.mode.CBC,
    padding: CryptoJs.pad.Pkcs7,
  });
  return encryptResult.toString();
}

/**
 * AES加密
 * @param content
 * @returns {string}
 */
export function enctyptAES(content: string) {
  const encryptResult = CryptoJs.AES.encrypt(content, key, {
    iv,
    mode: CryptoJs.mode.CBC,
    padding: CryptoJs.pad.Pkcs7,
  }).toString();
  return encryptResult;
}
/**
 * 解密
 * @param       {[type]} content [description]
 * @constructor
 * @return      {[type]}         [description]
 */
export function dectyptAES(content: string) {
  const bytes = CryptoJs.AES.decrypt(content.toString(), key, {
    iv,
    mode: CryptoJs.mode.CBC,
    padding: CryptoJs.pad.Pkcs7,
  });
  return bytes.toString(CryptoJs.enc.Utf8);
}
/**
 * 获取请求uuid
 * @return {[type]} [description]
 */
export function uuid() {
  const s: string[] = [];
  const hexDigits = '0123456789abcdef';
  for (let i = 0; i < 36; i += 1) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
  // eslint-disable-next-line no-bitwise
  s[19] = hexDigits.substr((Number(s[19]) & 0x3) | 0x8, 1);
  // eslint-disable-next-line no-multi-assign
  s[8] = s[13] = s[18] = s[23] = '-';

  const value = s.join('');
  return value;
}

/**
 * 获取时间戳
 * @return {[type]} [description]
 */
export function getTimeStamp() {
  return new Date().getTime().toString();
}

/**
 * md5加密
 * @param  {[type]} prama [description]
 * @return {[type]}       [description]
 */
export function encryptMd5(prama: string) {
  return CryptoJs.MD5(prama).toString();
}

/**
 * 公共参数
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export function authorization(currTimeStamp:string, au :string, body: string) {
  const data = {
    os: 'wxapp',
    version: '1.0',
    timestamp: currTimeStamp,
    accesstoken: encryptMd5(currTimeStamp).substring(11, 17).toUpperCase(),
    access_token: encryptMd5(currTimeStamp).substring(11, 17).toUpperCase(),
    cm: encryptMd5(body),
    au,
  };
  return data;
}

export function uploadHeaders() {
  const currTimeStamp = `${uuid()}-${getTimeStamp()}`;
  const headers = {
    os: 'wxapp',
    version: '1.0',
    timestamp: currTimeStamp,
    access_token: encryptMd5(currTimeStamp).substring(11, 17).toUpperCase(),
  };
  return headers;
}

/**
 * Base64转码
 * @param  {[type]} prama [description]
 * @return {[type]}       [description]
 */
export function encryptBase64(prama:string) {
  const str = CryptoJs.enc.Utf8.parse(prama);
  return CryptoJs.enc.Base64.stringify(str);
}

/**
 * Base64解码
 * @param  {[type]} prama [description]
 * @return {[type]}       [description]
 */
export function decryptBase64(prama:string) {
  const str = CryptoJs.enc.Base64.parse(prama);
  return str.toString(CryptoJs.enc.Utf8);
}

const urlKey = 'aef9e7ba9c680934';
const urlIv = '7a69ece002cb28e0';

const utf8Parse = (str:string) => CryptoJs.enc.Utf8.parse(str);

const base64Enc = (content:string) => CryptoJs.enc.Base64.stringify(utf8Parse(content))
  .toString();

const base64Dec = (content:string) => CryptoJs.enc.Base64.parse(content)
  .toString(CryptoJs.enc.Utf8);

const aesEncURL = (content: string, encKey: string, encIv: string) => {
  const result = CryptoJs.AES.encrypt(utf8Parse(content), utf8Parse(encKey), {
    mode: CryptoJs.mode.CBC,
    padding: CryptoJs.pad.Pkcs7,
    iv: utf8Parse(encIv),
  }).toString();

  return result;
};

const aesDec = (content:string, decKey: string, decIv: string) => {
  const result = CryptoJs.AES.decrypt(base64Dec(content), utf8Parse(decKey), {
    mode: CryptoJs.mode.CBC,
    padding: CryptoJs.pad.Pkcs7,
    iv: utf8Parse(decIv),
  }).toString(CryptoJs.enc.Utf8);
  return result;
};

// h5的url加密
export const URLEnc = (content:string) => base64Enc(aesEncURL(content, urlKey, urlIv));
// h5的url解密
export const URLDec = (content:string) => aesDec(content, urlKey, urlIv);
