import { dectyptAES, enctyptAES } from './crypto';

export const storageKeys = {
  OAUTH_TOKEN: 'OAUTH_TOKEN',
  REMEMBER_PASSWORD: 'REMEMBER_PASSWORD',
};

type StorageKey = keyof typeof storageKeys;

export const setStorage = (key: StorageKey, value: any) => {
  const str = JSON.stringify(value);
  localStorage.setItem(enctyptAES(storageKeys[key]), enctyptAES(str));
};

export const getStorage = (key: StorageKey) => {
  const data = localStorage.getItem(enctyptAES(storageKeys[key]));
  if (!data) {
    return null;
  }
  const str = dectyptAES(data);
  return JSON.parse(str);
};

export const removeStorage = (key: StorageKey) => {
  localStorage.removeItem(enctyptAES(storageKeys[key]));
};

export const clearStorage = () => {
  localStorage.clear();
};
