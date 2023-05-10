import { atom } from 'recoil';
import { SnackbarProps } from '@/mui/material';

export const snackbarState = atom<SnackbarProps>({
  key: 'snackbarState',
  default: {},
});
