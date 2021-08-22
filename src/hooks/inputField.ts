import { useCallback, useReducer } from 'react';

const SET_FIELD = 'SET_FIELD';
const SET_FIELDS = 'SET_FIELDS';

type InputFieldAction<T> = { type: string, value:T };

const inputFieldReducer = <S>(state:S, action:InputFieldAction<S>):S => {
  switch (action.type) {
    case SET_FIELD:
      return { ...state, ...action.value };
    case SET_FIELDS:
      return { ...action.value } as S;
    default:
      return state;
  }
};

export const setFieldsAction = (value: any) => ({
  type: SET_FIELDS,
  value,
});
export const setFieldAction = (value: any) => ({
  type: SET_FIELD,
  value,
});

/**
 * 页面表单的常用hooks
 * 方便在input 中的onChange里使用: onChange={setField('key')}
 * @param initialState T
 */
export const useInputField = <T>(initialState:T)
  :[T, (key: keyof T) => (value: any) => void, React.Dispatch<InputFieldAction<T>>] => {
  const [state, dispatch] = useReducer<React.Reducer<T, InputFieldAction<T>>>(inputFieldReducer,
    initialState);
  const setField = useCallback((key: keyof T) => (event:
  React.ChangeEvent<any>) => dispatch(setFieldAction({ [key]: event.target.value })), []);
  return [state, setField, dispatch];
};
