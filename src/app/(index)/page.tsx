import FeauterCard from '@/component/FeauterCard';
import {
  Unstable_Grid2 as Grid,
  Box, Typography,
} from '@/mui/material';

export default async function Index() {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 1 }}>
        One Word, One World.
      </Typography>
      <Grid container spacing={{ xs: 2, lg: 4 }} justifyContent="center">
        <Grid xs={12} sm={6} lg={5}>
          <FeauterCard
            title="博客"
            href="/blog"
            image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=820&h=547&fit=crop"
            content="病态是大众、发酵和发展者，也不是生命的情欲。"
          />
        </Grid>
        <Grid xs={12} sm={6} lg={5}>
          <FeauterCard
            title="工具"
            href="/tool"
            image="https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?w=820&h=547&fit=crop"
            content="病态是大众、发酵和发展者，也不是生命的情欲。"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
