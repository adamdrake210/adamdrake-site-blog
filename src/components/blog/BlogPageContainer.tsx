import React from 'react';
import NextLink from 'next/link';
import { Post } from 'types/types';
import BlogPreviewCard from './BlogPreviewCard';
import { Anchor, Box, Flex, Text, Title } from '@mantine/core';

type Props = {
  posts: Post[];
};

export default function BlogPageContainer({ posts }: Props) {
  return (
    <Flex mt={32} w="100%" direction="column" align="center" px={16}>
      <Flex
        pb={32}
        w="100%"
        justify="center"
        align="flex-start"
        direction="column"
      >
        <Title order={1} fw={200} mb={24}>
          Blog
        </Title>
        {posts.map(post => {
          return (
            <Flex mb={8} key={post.slug}>
              <NextLink as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
                <Anchor
                  sx={theme => ({
                    color:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[0]
                        : theme.colors.gray[9],
                    '&:hover': {
                      textDecoration: 'none',
                      color:
                        theme.colorScheme === 'dark'
                          ? theme.colors.dark[2]
                          : theme.colors.gray[6],
                    },
                  })}
                  w="100%"
                >
                  <BlogPreviewCard
                    slug={post.slug}
                    title={post.title}
                    description={post.description}
                  />
                </Anchor>
              </NextLink>
            </Flex>
          );
        })}
        {posts.length < 1 && (
          <Text fz="xl">No blog posts Found. Coming soon...</Text>
        )}
      </Flex>
    </Flex>
  );
}
