import React, { useState, useEffect } from 'react';
import { Flex, Text, Box, Link, Heading } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ArticlesContentFrontMatter } from 'types/types';
import { sortNumberByPublishedDateRemote } from 'utils/sortNumberByPublishedDateRemote';
import ArticlePreviewCard from './ArticlePreviewCard';
import { useThemeColors } from 'hooks/useThemeColors';

type Props = {
  articlePosts: any;
};

export default function ArticlesPageContainer({ articlePosts }: Props) {
  const [sortedPosts, setSortedPosts] = useState([]);
  const { headingColor } = useThemeColors();

  const handleSortingOrder = () => {
    return articlePosts.sort(sortNumberByPublishedDateRemote);
  };

  useEffect(() => {
    setSortedPosts(handleSortingOrder());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <Heading as="h1" size="3xl" mb={4} color={headingColor}>
            Articles
          </Heading>
          {sortedPosts?.map(
            ({ data }: ArticlesContentFrontMatter) =>
              data.published && (
                <Box flex={['1 0 100%']} mb={8} key={data.slug}>
                  <NextLink passHref href={`/articles/${data.slug}`}>
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
                      <ArticlePreviewCard
                        slug={data.slug}
                        title={data.title}
                        description={data.description}
                        readTime={data.readTime}
                      />
                    </Link>
                  </NextLink>
                </Box>
              ),
          )}
          {sortedPosts.length < 1 && (
            <Text fontSize="4xl" color="cyan.500">
              No Articles Found. Coming soon...
            </Text>
          )}
        </Flex>
      </Box>
    </Flex>
  );
}
