// import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import { marked } from 'marked';
import { BlogServiceApi } from '../../../../api/blog';
import { Box, Unstable_Grid2 as Grid, Typography } from '@/mui/material';

export default async function Detail({ params: { id } }:{ params: { id:string } }) {
  const blogApi = new BlogServiceApi();
  const res = await blogApi.blogServiceGet({ id: Number(id) }, { cache: 'no-store' });
  const blog = res.blog!;
  // const MDX = await MDXRemote({ source: blog.markdown! });
  const markdown = marked(blog.markdown!);

  return (
    <Box>
      <Grid container spacing={{ xs: 2, lg: 4 }} justifyContent="center">
        <Grid xs={12} lg={10}>
          <Typography variant="h4">{blog.title}</Typography>
          <Typography>{`${blog.author}  ${blog.createdAt!.toLocaleDateString()}`}</Typography>
        </Grid>
        <Grid xs={12} lg={10}>
          <Image
            src={blog.image!}
            width={820}
            height={547}
            priority
            style={{
              width: '100%',
              height: 'auto',
            }}
            alt="blog"
          />
        </Grid>
        <Grid xs={12} lg={10}>
          <div dangerouslySetInnerHTML={{ __html: markdown }} />
        </Grid>
      </Grid>
    </Box>
  );
}
