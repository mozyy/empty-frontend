import { useCallback, useContext } from 'react';
import { useSetRecoilState } from 'recoil';
import { SnackbarSetAllStateContext } from '@/context/snackbar';
import { snackbarState } from '@/store/snackbar';
import { SnackbarProps } from '@/mui/material';

export const useSnackbar = () => {
  const snackbar = useSetRecoilState(snackbarState);
  const open = useCallback((props: SnackbarProps) => {
    snackbar({ open: true, ...props });
  }, [snackbar]);
  return open;
};
