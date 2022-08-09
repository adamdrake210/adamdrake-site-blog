import React from 'react';

import { Heading, Box, Flex } from '@chakra-ui/react';
import PageSeo from 'components/common/PageSeo';
import { FrontMatterArticles } from 'types/types';
import { ImageComponent } from 'components/common/images/ImageComponent';
import readingTime from 'reading-time';

// Remote packages
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { articleFilePaths, ARTICLE_PATH } from 'utils/mdxUtils';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import PageContainer from 'layouts/PageContainer';
import { GetStaticProps } from 'next';
import { useThemeColors } from 'hooks/useThemeColors';

type Props = {
  frontMatter: FrontMatterArticles;
  source: string;
};

const components = {
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Box,
  ImageComponent,
};

export default function InterviewLayout({ frontMatter, source }: Props) {
  const { title, slug } = frontMatter;
  const { headingColor } = useThemeColors();

  return (
    <PageContainer maxWidth="728px">
      <PageSeo
        {...frontMatter}
        type="articles"
        url={`https://adamdrake.dev/articles/${slug}`}
      />
      <Box my={4}>
        <ImageComponent
          src={`${slug}`}
          altText={slug}
          width={960}
          height={560}
        />
      </Box>
      <Flex
        p={[4]}
        pt={[0, 0]}
        w="100%"
        justify={['center']}
        alignItems={['center']}
        direction={['column']}
        flexWrap="wrap"
      >
        <Box textAlign="center" w="100%">
          <Heading as="h1" size="3xl" color={headingColor}>
            {title}
          </Heading>
        </Box>
      </Flex>
      <Box px={[4, 8]} mb={6}>
        {/* @ts-ignore */}
        <MDXRemote {...source} components={components} />
      </Box>
    </PageContainer>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articleFilePaths = path.join(ARTICLE_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(articleFilePaths);

  const { content, data } = matter(source);
  const readTime = readingTime(content);

  const mdxSource = await serialize(content, {
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: { ...data, readTime },
    },
  };
};

export const getStaticPaths = async () => {
  const paths = articleFilePaths
    // Remove file extensions for page paths
    .map(path => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
