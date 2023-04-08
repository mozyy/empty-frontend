import { getServerSession } from 'next-auth/next';
import { PropsWithChildren } from 'react';
import Bar from './Bar';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Box } from '@/mui/material';

export const metadata = {
  title: {
    template: '%s | OW',
    default: 'One Word',
  },
  description: 'json,json美化,json格式化,工具,测试,身份证,身份证生成,blog,博客',
};

export default async function RootLayout({ children }:PropsWithChildren) {
  const session = await getServerSession(authOptions);
  return (
    <main>
      {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
      {/* <AppBar /> */}
      <Bar />
      <Box sx={{ p: 3 }}>
        {children}
      </Box>
    </main>
  );
}