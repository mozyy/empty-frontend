'use client';

import { useState } from 'react';
import Edit from './Edit';

export default function Create() {
  const [markdown, setMarkdown] = useState('');

  const onSubmit = (value:string) => {
    console.log(111, value);
    setMarkdown(value);
  };

  return (
    <Edit markdown={markdown} onSubmit={onSubmit} key={markdown} />
  );
}
