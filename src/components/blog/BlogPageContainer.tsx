import React from 'react';
import NextLink from 'next/link';
import { Anchor, Box, Flex, Grid, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { Post } from 'types/types';
import { BlogCard } from './BlogCard';
import { SITE_DOMAIN } from 'constants/constants';
import { CopyLinkButton } from 'components/common/buttons/CopyLinkButton';

type Props = {
  posts: Post[];
};

export default function BlogPageContainer({ posts }: Props) {
  const isMdDown = useMediaQuery('(max-width: 747px)');
  const isSmDown = useMediaQuery('(max-width: 600px)');

  return (
    <Flex my={16} w="100%" direction="column" align="flex-start" px={16}>
      <Title order={1} fw={200} mb={24}>
        Blog
      </Title>
      <Grid>
        {posts.map(post => {
          return (
            <Grid.Col
              mb={8}
              span={isSmDown ? 12 : isMdDown ? 6 : 4}
              key={post.slug}
            >
              <Box sx={{ position: 'relative' }}>
                <NextLink as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
                  <Anchor
                    sx={{
                      '&:hover': {
                        textDecoration: 'none',
                      },
                    }}
                  >
                    <BlogCard
                      title={post.title}
                      createdDate={post._createdAt}
                      content={post.content}
                      imageUrl={post.headerimageurl}
                    />
                  </Anchor>
                </NextLink>
                <CopyLinkButton url={`${SITE_DOMAIN}/blog/${post.slug}`} />
              </Box>
            </Grid.Col>
          );
        })}
      </Grid>
      {posts.length < 1 && (
        <Text fz="xl">No blog posts Found. Coming soon...</Text>
      )}
    </Flex>
  );
}
