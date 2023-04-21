'use client';

import Image from 'next/image';
import { marked } from 'marked';
import { useState } from 'react';
import { BlogServiceApi, V1NewBlogFromJSON, V1NewBlogToJSON } from '../../../../openapi/blog';
import Blog from '../Blog';
import { TextareaAutosize } from '@/mui/base';
import {
  Box, Button, Unstable_Grid2 as Grid, TextField, Typography, Paper,
  FormControl, Input, OutlinedInput,
} from '@/mui/material';

interface EditProps {
  markdown:string
  onSubmit:(markdown:string) => void
}

export default function Edit({ markdown, onSubmit }:EditProps) {
  const [text, setText] = useState(markdown);

  const [blog, setBlog] = useState(V1NewBlogFromJSON({}));

  return (
    <Box flex="auto" display="flex" flexDirection="column">
      <Box sx={{ textAlign: 'right', mb: 1 }}>
        <Button variant="contained" onClick={() => onSubmit(text)}>submit </Button>
      </Box>
      <Grid container spacing={{ xs: 2, lg: 4 }}>
        <Grid xs={12} md={6}>
          <Typography>edit</Typography>
          <TextField />
          <TextField
            fullWidth
            multiline
            value={blog.title}
            onChange={(e) => setBlog((p) => ({ ...p, title: e.target.value }))}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <Typography>view</Typography>
          <Blog blog={blog} />
        </Grid>
      </Grid>
    </Box>
  );
}
