import { PortableText } from '@portabletext/react';

import { ImageComponent } from 'components/common/images/ImageComponent';
import PageSeo from 'components/common/PageSeo';
import PageContainer from 'layouts/PageContainer';
import { client } from 'client';
import { Post } from 'types/types';
import { GetStaticProps } from 'next';
import { Box, Code, Flex, Text, Title } from '@mantine/core';

const components = {
  marks: {
    code: ({ children }: { children?: any }) => (
      <Code color="green" fz="lg" my={16} py={8} px={16}>
        {children}
      </Code>
    ),
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
    code: ({ children }: { children?: any }) => (
      <Code color="red" my={8}>
        {children}
      </Code>
    ),
    blockquote: ({ children }: { children?: any }) => (
      <Box
        sx={theme => ({
          borderLeft: 2,
          borderColor: theme.colors.blue[5],
        })}
        pl={4}
        my={8}
        fs="italic"
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
          </Flex>
          <Box my={4}>
            <ImageComponent
              src={`${post.slug}`}
              altText={post.slug}
              width={960}
              height={560}
            />
          </Box>

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
