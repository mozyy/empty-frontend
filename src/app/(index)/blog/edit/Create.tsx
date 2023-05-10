'use client';

import { useState } from 'react';
import Edit from './Edit';
import { useSetState } from '@/hooks/setState';
import { V1NewBlogFromJSON } from '@/openapi/blog';
import { useSnackbar } from '@/hooks/snackbar';

export default function Create() {
  const [blog, setBlog] = useSetState(V1NewBlogFromJSON({}));
  const snackbar = useSnackbar();

  const onSubmit = () => {
    console.log(111, blog);
    snackbar({ message: 'ttt' });
  };

  return (
    <Edit blog={blog} setBlog={setBlog} onSubmit={onSubmit} />
  );
}
