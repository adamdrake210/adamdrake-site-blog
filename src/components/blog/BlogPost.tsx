import { PortableText } from '@portabletext/react';
import { Box, Center, Divider, Flex, Text, Title } from '@mantine/core';

import { WrittenDate } from 'components/common/WrittenDate';
import { AboutMe } from 'components/common/AboutMe';
import { SocialShareBlogPost } from 'components/common/socialMedia/SocialShareBlogPost';
import { SITE_DOMAIN } from 'constants/constants';
import { Post } from 'types/types';
import PageContainer from 'layouts/PageContainer';
import PageSeo from 'components/common/PageSeo';
import { blogComponents } from './blogComponents';
import { MediumCtaButton } from 'components/common/buttons/MediumCtaButton';

type Props = {
  post: Post;
};

export const BlogPost = ({ post }: Props) => {
  return (
    <PageContainer maxWidth="760px">
      <Box px={16}>
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
          style={{
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
        <Box mb={24} maw={800}>
          <img
            src={post.headerimageurl}
            alt={`Image of ${post.title}`}
            width={'100%'}
            height={'auto'}
          />
        </Box>
        <Text px={16} mb={16} fz={26}>
          {post.intro}
        </Text>
        <Box px={16} mb={48}>
          <PortableText value={post.content} components={blogComponents} />
        </Box>

        {post.mediumurl && (
          <Flex direction="column" gap={16}>
            <Divider mb={16} />
            <Box>
              <Title order={2} fz={{ base: 28, md: 32 }} mb={10}>
                Want to read more?
              </Title>
              <Text fz="lg" mb={6}>
                The full version of this article lives on Medium — you can
                finish by clicking the button below.{' '}
              </Text>
            </Box>
            <Center my={16} mb={48}>
              <MediumCtaButton mediumUrl={post.mediumurl} />
            </Center>
          </Flex>
        )}

        <SocialShareBlogPost
          title={post.title}
          writtenBy={post.writtenby}
          url={`${SITE_DOMAIN}/blog/${post.slug}`}
        />

        <Divider mb={24} />
        <AboutMe />
      </Box>
    </PageContainer>
  );
};
