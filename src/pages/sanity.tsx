import { createClient } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import { Box, Code, Flex, Heading, Text } from '@chakra-ui/react';
import { ImageComponent } from 'components/common/images/ImageComponent';
import PageSeo from 'components/common/PageSeo';
import { useThemeColors } from 'hooks/useThemeColors';
import PageContainer from 'layouts/PageContainer';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-03-04',
  useCdn: false,
});

const components = {
  marks: {
    code: ({ children }: { children?: any }) => (
      <Code colorScheme="green" my={4} py={2} px={4}>
        {children}
      </Code>
    ),
  },
  block: {
    h1: ({ children }: { children?: any }) => (
      <Heading as="h1" size="2xl" mb={2} mt={6} fontWeight={200}>
        {children}
      </Heading>
    ),
    h2: ({ children }: { children?: any }) => (
      <Heading as="h2" size="xl" mb={2} mt={6} fontWeight={200}>
        {children}
      </Heading>
    ),
    h3: ({ children }: { children?: any }) => (
      <Heading as="h3" size="lg" mb={2} mt={6} fontWeight={200}>
        {children}
      </Heading>
    ),
    h4: ({ children }: { children?: any }) => (
      <Heading as="h4" size="md" mb={2} mt={6} fontWeight={200}>
        {children}
      </Heading>
    ),
    h5: ({ children }: { children?: any }) => (
      <Heading as="h5" size="sm" mb={2} mt={6} fontWeight={200}>
        {children}
      </Heading>
    ),
    h6: ({ children }: { children?: any }) => (
      <Heading as="h6" size="sm" mb={2} mt={6} fontWeight={200}>
        {children}
      </Heading>
    ),
    normal: ({ children }: { children?: any }) => (
      <Text fontSize="lg" fontWeight={400} pb={2}>
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
  console.log('🚀 ~ file: sanity.tsx:80 ~ IndexPage ~ posts:', posts);
  const { slug, title, description, _updatedAt, content } = posts[2];
  const { headingColor } = useThemeColors();

  return (
    <>
      <PageContainer maxWidth="728px">
        <PageSeo
          title={title}
          description={description}
          slug={slug}
          publishedDate={_updatedAt}
          url={`https://adamdrake.dev/articles/${slug}`}
        />
        <Flex
          p={[4]}
          pt={[0, 0]}
          mt={12}
          w="100%"
          justify={['center']}
          alignItems={['center']}
          direction={['column']}
          flexWrap="wrap"
        >
          <Heading as="h1" size="xl" fontWeight={200} color={headingColor}>
            {title}
          </Heading>
        </Flex>
        <Box my={4}>
          <ImageComponent
            src={`${slug}`}
            altText={slug}
            width={960}
            height={560}
          />
        </Box>

        <Box px={[4, 8]} mb={8}>
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
