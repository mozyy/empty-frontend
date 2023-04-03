import { PropsWithChildren } from 'react';
import Theme from './Theme';
import './globals.css';
import { CssBaseline, Box, Typography } from '@/mui/material';

export const runtime = 'experimental-edge';

export const metadata = {
  title: 'One-Word',
  description: 'One word, One world.',
};

export default function RootLayout({ children }:PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <CssBaseline enableColorScheme />
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box sx={{ flex: 'auto' }}>{children}</Box>
            <Box sx={{ flex: 'none', p: 2, textAlign: 'center' }}>
              <Typography variant="body2"> © 2021-2023 yyuck.com 版权所有</Typography>
              <Typography
                component="a"
                variant="body2"
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                蜀ICP备2021007564号-2
              </Typography>
            </Box>
          </Box>
        </Theme>
      </body>
    </html>
  );
}
