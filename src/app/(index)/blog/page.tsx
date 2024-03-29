import Link from 'next/link';
import { BlogServiceApi } from '../../../openapi/blog';
import BlogCard from './BlogCard';
import {
  Box, Button, Unstable_Grid2 as Grid, Typography,
} from '@/mui/material';
import FeauterCard from '@/component/FeauterCard';

export default async function Blog() {
  const blogApi = new BlogServiceApi();
  const res = await blogApi.blogServiceList({ cache: 'no-cache' });
  const [first, ...blogs] = res.blogs || [];
  return (
    <Grid container spacing={{ xs: 2, lg: 4 }}>
      <Grid xs={12} container justifyContent="space-between" alignItems="center">
        <Typography variant="h3">Blog.</Typography>
        <Link href="/blog/edit">
          <Button variant="contained">new</Button>
        </Link>
      </Grid>
      <Grid xs={12}>
        <BlogCard blog={first} />
      </Grid>
      {blogs.map((blog) => (
        <Grid xs={12} sm={6} key={blog.id}>
          <BlogCard blog={blog} />
        </Grid>
      ))}
    </Grid>
  );
}
