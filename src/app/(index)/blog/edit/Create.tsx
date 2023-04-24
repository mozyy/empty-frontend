'use client';

import { useState } from 'react';
import Edit from './Edit';
import { useSetState } from '@/hooks/setState';
import { V1NewBlogFromJSON } from '@/openapi/blog';

export default function Create() {
  const [blog, setBlog] = useSetState(V1NewBlogFromJSON({}));

  const onSubmit = () => {
    console.log(111, blog);
  };

  return (
    <Edit blog={blog} setBlog={setBlog} onSubmit={onSubmit} />
  );
}
