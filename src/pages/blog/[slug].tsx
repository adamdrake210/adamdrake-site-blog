import { PortableText } from '@portabletext/react';
import { Prism } from '@mantine/prism';

import PageSeo from 'components/common/PageSeo';
import PageContainer from 'layouts/PageContainer';
import { client } from 'client';
import { Post } from 'types/types';
import { GetStaticProps } from 'next';
import { Box, Code, Flex, Text, Title, useMantineTheme } from '@mantine/core';
import { useScroll, useSpring, motion } from 'framer-motion';
import Image from 'next/image';
import { WrittenDate } from 'components/common/WrittenDate';

const components = {
  types: {
    myCodeField: ({ value }: any) => {
      return <Prism language="tsx">{value.code}</Prism>;
    },
  },
  block: {
    h1: ({ children }: { children?: any }) => (
      <Title order={1} mb={16} mt={24} fw={200}>
        {children}
      </Title>
    ),
    h2: ({ children }: { children?: any }) => (
      <Title order={2} mb={16} mt={24} fw={200}>
        {children}
      </Title>
    ),
    h3: ({ children }: { children?: any }) => (
      <Title order={3} mb={16} mt={24} fw={200}>
        {children}
      </Title>
    ),
    h4: ({ children }: { children?: any }) => (
      <Title order={4} mb={16} mt={24} fw={200}>
        {children}
      </Title>
    ),
    h5: ({ children }: { children?: any }) => (
      <Title order={5} mb={16} mt={24} fw={200}>
        {children}
      </Title>
    ),
    h6: ({ children }: { children?: any }) => (
      <Title order={6} mb={16} mt={24} fw={200}>
        {children}
      </Title>
    ),
    normal: ({ children }: { children?: any }) => (
      <Text fz="lg" fw={400} pb={8}>
        {children}
      </Text>
    ),

    blockquote: ({ children }: { children?: any }) => (
      <Box
        sx={theme => ({
          borderLeft: `5px solid ${theme.colors.blue[5]}`,
        })}
        pl={16}
        my={24}
        fs="italic"
        fz={20}
      >
        {children}
      </Box>
    ),
  },
};

function Post({ post }: { post: Post }) {
  const theme = useMantineTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {post && (
        <PageContainer maxWidth="728px">
          <motion.div
            style={{
              scaleX,
              position: 'fixed',
              top: 68,
              left: 0,
              right: 0,
              height: 5,
              background: theme.colors.blue[5],
              transformOrigin: '0%',
              zIndex: 1000,
            }}
          />
          <PageSeo
            title={post.title}
            description={post.description}
            slug={post.slug}
            publishedDate={post._updatedAt}
            url={`https://adamdrake.dev/blog/${post.slug}`}
          />
          <Flex
            p={32}
            pt={0}
            mt={48}
            w="100%"
            justify="center"
            align="center"
            direction="column"
          >
            <Title order={1} fw={200}>
              {post.title}
            </Title>
            <WrittenDate date={post._createdAt} author={post.writtenby} />
          </Flex>
          <Box mb={24}>
            <Image
              src={post.headerimageurl}
              alt={`Image of ${post.title}`}
              width={960}
              height={560}
              priority
            />
          </Box>
          <Text px={32} mb={16} fz={24}>
            {post.intro}
          </Text>
          <Box px={32} mb={48}>
            <PortableText value={post.content} components={components} />
          </Box>
        </PageContainer>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug)][].slug`,
  );

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async context => {
  // It's important to default the slug so that it doesn't return "undefined"
  const params = context.params;
  const slug = params?.slug || '';
  const post = await client.fetch(
    `
    *[_type == "post" && slug == $slug][0]
  `,
    { slug },
  );

  return {
    props: {
      post,
    },
  };
};

export default Post;
