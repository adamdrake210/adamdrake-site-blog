import { createClient } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import { Box, Code, Flex, Heading, Text } from '@chakra-ui/react';
import { ImageComponent } from 'components/common/images/ImageComponent';
import PageSeo from 'components/common/PageSeo';
import { useThemeColors } from 'hooks/useThemeColors';
import PageContainer from 'layouts/PageContainer';

const client = createClient({
  projectId: 'z8nvtt9c',
  dataset: 'production',
  apiVersion: '2023-03-04',
  useCdn: false,
});

const components = {
  block: {
    h1: ({ children }: { children?: any }) => (
      <Heading as="h1" size="3xl">
        {children}
      </Heading>
    ),
    h2: ({ children }: { children?: any }) => (
      <Heading as="h2" size="2xl">
        {children}
      </Heading>
    ),
    h3: ({ children }: { children?: any }) => (
      <Heading as="h3" size="xl" my={2}>
        {children}
      </Heading>
    ),
    h4: ({ children }: { children?: any }) => (
      <Heading as="h4" size="lg" my={2}>
        {children}
      </Heading>
    ),
    h5: ({ children }: { children?: any }) => (
      <Heading as="h5" size="md" my={2}>
        {children}
      </Heading>
    ),
    h6: ({ children }: { children?: any }) => (
      <Heading as="h6" size="sm" my={2}>
        {children}
      </Heading>
    ),
    normal: ({ children }: { children?: any }) => (
      <Text fontSize="sm" fontWeight={200}>
        {children}
      </Text>
    ),
    code: ({ children }: { children?: any }) => (
      <Code colorScheme="red" my={8}>
        {children}
      </Code>
    ),
    blockquote: ({ children }: { children?: any }) => (
      <Box
        borderLeft="2px"
        borderColor="blue.200"
        pl={4}
        my={8}
        fontStyle="italic"
      >
        {children}
      </Box>
    ),
  },
};

export default function IndexPage({ posts }: { posts: any[] }) {
  const { slug, title, description, _updatedAt, content } = posts[0];
  const { headingColor } = useThemeColors();

  return (
    <>
      <PageContainer maxWidth="728px">
        <PageSeo
          title={title}
          description={description}
          slug={slug}
          publishedDate={_updatedAt}
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
          <PortableText value={content} components={components} />
        </Box>
      </PageContainer>
    </>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(`*[_type == "post"]`);

  return {
    props: {
      posts,
    },
  };
}
