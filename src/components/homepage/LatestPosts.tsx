import { Box, Grid, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { BlogCard } from 'components/blog/BlogCard';
import { Post } from 'types/types';
import NextLink from 'next/link';

type Props = {
  latestPosts: Post[];
};

export const LatestPosts = ({ latestPosts }: Props) => {
  const isMdDown = useMediaQuery('(max-width: 747px)');
  const isSmDown = useMediaQuery('(max-width: 600px)');

  return (
    <Box>
      {latestPosts && latestPosts.length > 0 ? (
        <>
          <Title order={2} mb={16}>
            Recently Published
          </Title>
          <Grid>
            {latestPosts.map(post => {
              return (
                <Grid.Col
                  mb={8}
                  span={isSmDown ? 12 : isMdDown ? 6 : 4}
                  key={post.slug}
                >
                  <Box style={{ position: 'relative' }}>
                    <NextLink as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
                      <BlogCard
                        title={post.title}
                        createdDate={post._createdAt}
                        content={post.content}
                        imageUrl={post.headerimageurl}
                      />
                    </NextLink>
                  </Box>
                </Grid.Col>
              );
            })}
          </Grid>
        </>
      ) : (
        <Text fz="xl">No blog posts Found. Coming soon...</Text>
      )}
    </Box>
  );
};
