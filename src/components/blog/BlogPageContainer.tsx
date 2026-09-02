import React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Center,
  Flex,
  Grid,
  Pagination,
  Text,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { Post } from 'types/types';
import { BlogCard } from './BlogCard';
import { SITE_DOMAIN } from 'constants/constants';
import { CopyLinkButton } from 'components/common/buttons/CopyLinkButton';
import { useQuery } from '@tanstack/react-query';
import {
  BLOG_POSTS_PER_PAGE,
  getAllPosts,
  getPostCount,
} from 'services/sanityio/getAllPosts';
import { CustomLoader } from 'components/common/CustomLoader';
import ErrorMessage from 'components/common/ErrorMessage';

export default function BlogPageContainer() {
  const isMdDown = useMediaQuery('(max-width: 747px)');
  const isSmDown = useMediaQuery('(max-width: 600px)');
  const [page, setPage] = React.useState(1);
  const itemNumber = (page - 1) * BLOG_POSTS_PER_PAGE;

  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery<Post[], Error>({
    queryKey: ['posts', itemNumber],
    queryFn: () => getAllPosts(itemNumber),
    keepPreviousData: true,
  });

  const { data: totalPosts } = useQuery<number>({
    queryKey: ['postCount'],
    queryFn: getPostCount,
  });

  const totalPages = totalPosts
    ? Math.ceil(totalPosts / BLOG_POSTS_PER_PAGE)
    : 1;

  return (
    <Flex my={16} w="100%" direction="column" align="flex-start" px={16}>
      <Title order={1} fw={200} mb={24}>
        Blog
      </Title>
      {isLoading && (
        <Center w="100%">
          <CustomLoader />
        </Center>
      )}
      {isError && (
        <Center>
          <ErrorMessage errorMessage={error.message} />
        </Center>
      )}
      {posts && posts.length > 0 && (
        <>
          <Grid>
            {posts.map(post => {
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
                    <CopyLinkButton url={`${SITE_DOMAIN}/blog/${post.slug}`} />
                  </Box>
                </Grid.Col>
              );
            })}
            {/* Pagination */}
            <Flex justify="center" w="100%" mt={16}>
              <Pagination total={totalPages} value={page} onChange={setPage} />
            </Flex>
          </Grid>
          {posts.length < 1 && (
            <Text fz="xl">No blog posts Found. Coming soon...</Text>
          )}
        </>
      )}
    </Flex>
  );
}
