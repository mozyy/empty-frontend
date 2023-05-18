import Link from 'next/link';
import qs from 'qs';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import FeauterCard from '@/component/FeauterCard';
import {
  Unstable_Grid2 as Grid,
  Box, Typography, AppBar, IconButton, Tabs, Toolbar, Tab, Badge, Card,
  CardHeader, Avatar, CardContent, CardActions, Button,
} from '@/mui/material';
import { MoreVert, Share, Star } from '@/mui/icons-material';

dayjs.extend(relativeTime);

const labels = [
  '', 'JavaScript', 'Python', 'Java', 'Go', 'TypeScript', 'C++', 'C', 'PHP', 'C#', 'Swift', 'Rust', 'Vue',
];

export default async function Index({ searchParams }:{ searchParams:{ label: string } }) {
  const { label = '' } = searchParams;
  const value = labels.indexOf(label);
  const repos = await fetch(`https://api.github.com/search/repositories?q=stars:>1000${label ? ` language:${label}` : ''}&sort=stars&per_page=42&page=1`)
    .then((resp) => resp.json());
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 1 }}>
        github rank
      </Typography>
      <Grid container spacing={{ xs: 2, lg: 4 }} justifyContent="center">
        <Grid xs={12}>
          <Tabs
            value={value}
            // textColor="inherit"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="nav tabs example"
          >
            {labels.map((item) => (<Tab LinkComponent={Link} key={item} label={item || 'ALL'} href={`/github${qs.stringify({ label: item }, { addQueryPrefix: true })}`} />))}
          </Tabs>
        </Grid>
        <Grid xs={10} spacing={2} container>
          {repos.items.map((item, i) => (
            <Grid xs={4} key={item.id}>
              <Card>
                <CardHeader
                  avatar={(
                    <Avatar aria-label={item.owner.login} src={item.owner.avatar_url} />
                    )}
                  action={(
                    <IconButton aria-label="settings">
                      <MoreVert />
                    </IconButton>
                  )}
                  title={(
                    <a href={item.html_url} target="_blank">
                      {`${i + 1} ${item.name}`}
                    </a>
                  )}
                  subheader={item.full_name}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: '-webkit-box',
                      overflow: 'hidden',
                      WebkitLineClamp: '2',
                      WebkitBoxOrient: 'vertical',
                      textOverflow: 'ellipsis',
                    }}
                    title={item.description}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Button aria-label="add to favorites">
                    <Star />
                    {item.stargazers_count}
                  </Button>
                  <Button aria-label="share">
                    <Share />
                    {item.forks_count}
                  </Button>
                </CardActions>
                <CardActions disableSpacing>
                  <Typography variant="body2" color="text.secondary">
                    {`last commit: ${dayjs(item.pushed_at).fromNow(true)} ago`}
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
