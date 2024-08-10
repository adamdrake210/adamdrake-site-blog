import React from 'react';
import { Anchor, Box, Title, useMantineTheme } from '@mantine/core';
import NextLink from 'next/link';

import { PreviewCard } from 'components/blog/PreviewCard';
import { Post } from 'types/types';

type Props = {
  post: Post;
  pageCategory: string;
  cta: string;
  pageTitle: string;
};

export default function HomepageBanner({
  post,
  pageCategory,
  pageTitle,
}: Props) {
  const { headerimageurl, slug, title, description } = post;

  return (
    <Box component="section" w="100%" p={4} pb={8} mb={24}>
      <Title order={2} mb={4} w="100%">
        {pageTitle}
      </Title>
      <NextLink
        as={`/${pageCategory}/${slug}`}
        href={`/${pageCategory}/[slug]`}
      >
        <Anchor
          style={{
            textDecoration: 'none',
            color: 'var(--mantine-color-gray-7)',
          }}
          w="100%"
        >
          <PreviewCard
            title={title}
            description={description}
            imageUrl={headerimageurl}
          />
        </Anchor>
      </NextLink>
    </Box>
  );
}
