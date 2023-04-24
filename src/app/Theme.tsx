'use client';

import { PropsWithChildren } from 'react';
import { SWRConfig } from 'swr';
import { ThemeProvider, createTheme } from '@/mui/material';
import { AdapterDayjs, LocalizationProvider } from '@/mui/x-date-pickers';

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

export default function Theme({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <SWRConfig
          value={{
            suspense: true,
          }}
        >
          {children}
        </SWRConfig>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
