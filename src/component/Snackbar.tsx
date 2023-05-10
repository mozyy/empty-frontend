'use client';

import { PropsWithChildren } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  Snackbar as SnackbarMUI, SnackbarProps,
} from '@/mui/material';
import { SnackbarSetAllStateContext } from '@/context/snackbar';
import { useSetState } from '@/hooks/setState';
import { snackbarState } from '@/store/snackbar';

export default function Snackbar() {
  const [props, setProps] = useRecoilState(snackbarState);
  const onClose = () => {
    setProps({ open: false });
  };
  return (
    <SnackbarMUI autoHideDuration={2000} onClose={onClose} {...props} />
  );
}
