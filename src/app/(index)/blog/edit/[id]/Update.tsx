'use client';

import { useState } from 'react';
import Edit from '../Edit';

export default function Update({ id }:{ id:string }) {
  const [markdown, setMarkdown] = useState('');

  const onSubmit = (value:string) => {
    console.log(111, value);
    setMarkdown(value);
  };

  return (
    <Edit markdown={markdown} onSubmit={onSubmit} key={markdown} />
  );
}
