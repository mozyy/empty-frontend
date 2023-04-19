'use client';

import Image from 'next/image';
import { marked } from 'marked';
import { useState } from 'react';
import { BlogServiceApi } from '../../../../openapi/blog';
import {
  Box, Button, Unstable_Grid2 as Grid, TextField, Typography, Paper,
} from '@/mui/material';

interface EditProps {
  markdown:string
  onSubmit:(markdown:string) => void
}

export default function Edit({ markdown, onSubmit }:EditProps) {
  const [text, setText] = useState(markdown);

  const markdownText = marked(text!);

  return (
    <Box flex="auto" display="flex" flexDirection="column">
      <Box sx={{ textAlign: 'right', mb: 1 }}>
        <Button variant="contained" onClick={() => onSubmit(text)}>submit </Button>
      </Box>
      <Grid container spacing={{ xs: 2, lg: 4 }} flex="auto">
        <Grid xs={12} md={6}>
          <TextField fullWidth sx={{ height: '100%' }} multiline value={text} onChange={(e) => setText(e.target.value)} />
        </Grid>
        <Grid xs={12} md={6}>
          <Paper sx={{ width: '100%', height: '100%', px: 2 }} variant="outlined" dangerouslySetInnerHTML={{ __html: markdownText }} />
        </Grid>
      </Grid>
    </Box>
  );
}
