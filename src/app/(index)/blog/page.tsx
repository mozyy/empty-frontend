import { BlogApi } from '../../../openapi';
import { Box, Unstable_Grid2 as Grid, Typography } from '@/mui/material';
import FeauterCard from '@/component/FeauterCardProps';

export default async function Blog() {
  const blogApi = new BlogApi();
  const res = await blogApi.get({ cache: 'no-store' });
  const [first, ...blogs] = res;
  return (
    <Box>
      <Grid container spacing={{ xs: 2, lg: 4 }} justifyContent="center">
        <Grid xs={12} lg={10}>
          <Typography variant="h3">Blog.</Typography>
        </Grid>
        <Grid xs={12} lg={10}>
          <FeauterCard
            title={first.title}
            href={`/blog/${first.id}`}
            image={first.image}
            content={first.summary}
          />
        </Grid>
        {blogs.map((blog) => (
          <Grid xs={12} sm={6} lg={5} key={blog.id}>
            <FeauterCard
              title={blog.title}
              href={`/blog/${blog.id}`}
              image={blog.image}
              content={blog.summary}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
