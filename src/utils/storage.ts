import { dectyptAES, enctyptAES } from './crypto';

export const storageKeys = {
  OAUTH_TOKEN: 'OAUTH_TOKEN',

};

type StorageKey = keyof typeof storageKeys;

export const setStorage = (key: StorageKey, value: string) => {
  localStorage.setItem(enctyptAES(storageKeys[key]), enctyptAES(value));
};

export const getStorage = (key: StorageKey) => {
  const data = localStorage.getItem(enctyptAES(storageKeys[key]));
  if (!data) {
    return null;
  }
  return dectyptAES(data);
};

export const removeStorage = (key: StorageKey) => {
  localStorage.removeItem(enctyptAES(storageKeys[key]));
};

export const clearStorage = () => {
  localStorage.clear();
};
