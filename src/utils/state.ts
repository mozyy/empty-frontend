export enum sexEnum {
  UNKNOW,
  MAN,
  WOMAN,
}

const sexEnumMap = ["unknow", "男", "女"]

export const sexEnumDesc = (value:sexEnum) => sexEnumMap[value]
