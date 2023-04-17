import { BlogServiceApi } from '../../../openapi/blog';
import BlogCard from './BlogCard';
import { Box, Unstable_Grid2 as Grid, Typography } from '@/mui/material';
import FeauterCard from '@/component/FeauterCard';

export default async function Blog() {
  const blogApi = new BlogServiceApi();
  const res = await blogApi.blogServiceList({ cache: 'no-cache' });
  const [first, ...blogs] = res.blogs || [];
  return (
    <Box>
      <Grid container spacing={{ xs: 2, lg: 4 }} justifyContent="center">
        <Grid xs={12} lg={10}>
          <Typography variant="h3">Blog.</Typography>
        </Grid>
        <Grid xs={12} lg={10}>
          <BlogCard blog={first} />
        </Grid>
        {blogs.map((blog) => (
          <Grid xs={12} sm={6} lg={5} key={blog.id}>
            <BlogCard blog={blog} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
