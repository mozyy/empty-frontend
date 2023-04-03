'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider, createTheme } from '@/mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#9145b1',
    },
    secondary: {
      main: '#ff4081',
    },
  },
});

export default function Theme({ children }:PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
