import { useCallback, useReducer } from 'react';

const SET_FIELD = 'SET_FIELD';
const SET_FIELDS = 'SET_FIELDS';

type InputFieldAction = {
  type: string
  value: Object
};

const inputFieldReducer = <S>(state:S, action:InputFieldAction):S => {
  switch (action.type) {
    case SET_FIELD:
      return { ...state, ...action.value };
    case SET_FIELDS:
      return { ...action.value } as S;
    default:
      return state;
  }
};

// 所有字段替换
export const setFieldsAction = (value) => ({
  type: SET_FIELDS,
  value,
});
// 更新部分字段
export const setFieldAction = (value) => ({
  type: SET_FIELD,
  value,
});

/**
 * 页面表单的常用hooks
 * 方便在input 中的onChange里使用: onChange={setField('key')}
 * @param initialState T
 */
export const useSetState = <T>(initialState:T)
  :[T, (key: keyof T) => (value: any) => void, React.Dispatch<InputFieldAction>] => {
  const [state, dispatch] = useReducer<React.Reducer<T, InputFieldAction>>(
    inputFieldReducer,
    initialState,
  );
  const setState = useCallback((key: keyof T) => (value:
  any) => dispatch(setFieldAction({ [key]: value })), []);
  return [state, setState, dispatch];
};
