import React from 'react';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { Box, Divider, Flex, Text, Title } from '@mantine/core';

import { WrittenDate } from 'components/common/WrittenDate';
import { AboutMe } from 'components/common/AboutMe';
import { SocialShareBlogPost } from 'components/common/socialMedia/SocialShareBlogPost';
import { SITE_DOMAIN } from 'constants/constants';
import { Post } from 'types/types';
import PageContainer from 'layouts/PageContainer';
import PageSeo from 'components/common/PageSeo';
import { blogComponents } from './blogComponents';
import { BlogLikeButton } from './BlogLikeButton';
import { SubStackSubscribe } from 'components/substack/SubStackSubscribe';

type Props = {
  post: Post;
};

export const BlogPost = ({ post }: Props) => {
  return (
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
        <PortableText value={post.content} components={blogComponents} />
      </Box>

      <SubStackSubscribe />

      <BlogLikeButton slug={post.slug} />
      <SocialShareBlogPost
        title={post.title}
        writtenBy={post.writtenby}
        url={`${SITE_DOMAIN}/blog/${post.slug}`}
      />

      <Divider mb={24} />
      <AboutMe />
    </PageContainer>
  );
};
