import { PortableText } from '@portabletext/react';
import { Prism } from '@mantine/prism';

import PageSeo from 'components/common/PageSeo';
import PageContainer from 'layouts/PageContainer';
import { client } from 'client';
import { Post } from 'types/types';
import { GetStaticProps } from 'next';
import { Box, Divider, Flex, Text, Title } from '@mantine/core';
import Image from 'next/image';
import { WrittenDate } from 'components/common/WrittenDate';
import { AboutMe } from 'components/common/AboutMe';
import { SocialShareBlogPost } from 'components/common/socialMedia/SocialShareBlogPost';
import { SITE_DOMAIN } from 'constants/constants';

const components = {
  types: {
    myCodeField: ({ value }: any) => {
      return (
        <Prism language="tsx" my={16}>
          {value.code}
        </Prism>
      );
    },
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: { children?: any }) => <ul>{children}</ul>,
    number: ({ children }: { children?: any }) => <ol>{children}</ol>,
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
    normal: ({ children }: { children?: any }) => {
      return (
        <Text fz="xl" fw={400} pb={8}>
          {children}
        </Text>
      );
    },
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
  return (
    <>
      {post && (
        <PageContainer maxWidth="728px">
          <PageSeo
            title={post.title}
            description={post.description}
            imageUrl={post.headerimageurl}
            publishedDate={post._updatedAt}
            url={`${SITE_DOMAIN}/blog/${post.slug}`}
          />
          <Flex
            p={16}
            pt={0}
            mt={48}
            w="100%"
            justify="center"
            align="center"
            direction="column"
            sx={{
              '@media (max-width: 600px)': {
                textAlign: 'center',
              },
            }}
          >
            <Title order={1} fw={200}>
              {post.title}
            </Title>
            <WrittenDate
              date={post._createdAt}
              author={post.writtenby}
              content={post.content}
            />
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
          <Text px={16} mb={16} fz={28}>
            {post.intro}
          </Text>
          <Box px={16} mb={48}>
            <PortableText value={post.content} components={components} />
          </Box>
          <SocialShareBlogPost
            title={post.title}
            writtenBy={post.writtenby}
            url={`${SITE_DOMAIN}/blog/${post.slug}`}
          />

          <Divider mb={24} />
          <AboutMe />
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
