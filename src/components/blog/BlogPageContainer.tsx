import React from 'react';
import { Flex, Text, Box, Link, Heading } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Post } from 'types/types';
import { useThemeColors } from 'hooks/useThemeColors';
import BlogPreviewCard from './BlogPreviewCard';

type Props = {
  posts: Post[];
};

export default function BlogPageContainer({ posts }: Props) {
  const { headingColor } = useThemeColors();

  return (
    <Flex mt={12} w="100%" direction="column" alignItems="center">
      <Box as="section" mt={12} px={[4, 8]}>
        <Flex
          pb={[4, 8]}
          w="100%"
          justify={['center', 'center', 'space-between', 'flex-start']}
          alignItems={['center']}
          direction={['column', 'row']}
          flexWrap="wrap"
        >
          <Heading
            as="h1"
            fontWeight={200}
            size="2xl"
            mb={4}
            color={headingColor}
          >
            Blog
          </Heading>
          {posts.map(post => {
            return (
              <Box flex={['1 0 100%']} mb={8} key={post.slug}>
                <NextLink passHref href={`/blog/${post.slug}`}>
                  <Link
                    textDecoration="none"
                    _hover={{
                      textDecoration: 'none',
                    }}
                  >
                    <Flex
                      justifyContent={['center', 'space-between']}
                      alignItems="center"
                    ></Flex>
                    <BlogPreviewCard
                      slug={post.slug}
                      title={post.title}
                      description={post.description}
                    />
                  </Link>
                </NextLink>
              </Box>
            );
          })}
          {posts.length < 1 && (
            <Text fontSize="4xl" color="cyan.500">
              No blog posts Found. Coming soon...
            </Text>
          )}
        </Flex>
      </Box>
    </Flex>
  );
}
