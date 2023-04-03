'use client';

import { PropsWithChildren } from 'react';
import { Unstable_Grid2 as Grid, Typography } from '@/mui/material';

export default function Section({ children }:PropsWithChildren) {
  return (
    <Grid container>
      <Grid>{children}</Grid>
      <Grid>
        <Typography> © 2021-2023 yyuck.com 版权所有</Typography>
        <Typography
          component="a"
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          蜀ICP备2021007564号-2
        </Typography>
      </Grid>
    </Grid>
  );
}
