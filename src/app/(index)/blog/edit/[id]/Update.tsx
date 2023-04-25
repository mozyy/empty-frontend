'use client';

import { useState } from 'react';
import Edit from '../Edit';
import { V1NewBlog, V1NewBlogFromJSON } from '@/openapi/blog';
import { useSetState } from '@/hooks/setState';

export default function Update({ id }:{ id:string }) {
  const [blog, setBlog] = useSetState(V1NewBlogFromJSON({}));

  const onSubmit = (value:V1NewBlog) => {
    console.log(111, value);
    setBlog(value);
  };

  return (
    <Edit blog={blog} onSubmit={onSubmit} setBlog={setBlog} />
  );
}
