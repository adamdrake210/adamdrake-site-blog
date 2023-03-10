import React from 'react';
import { Anchor, Box, Title } from '@mantine/core';
import NextLink from 'next/link';

import { PreviewCard } from 'components/blog/PreviewCard';

type Props = {
  post: any;
  pageCategory: string;
  cta: string;
  pageTitle: string;
};

export default function HomepageBanner({
  post,
  pageCategory,
  pageTitle,
}: Props) {
  const { slug, title, description } = post;

  return (
    <Box component="section" w="100%" p={4} pb={8} mb={48}>
      <Title order={2} mb={4} w="100%">
        {pageTitle}
      </Title>
      <NextLink
        as={`/${pageCategory}/${slug}`}
        href={`/${pageCategory}/[slug]`}
      >
        <Anchor
          sx={theme => ({
            color:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[0]
                : theme.colors.gray[9],
            '&:hover': {
              textDecoration: 'none',
              color:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[2]
                  : theme.colors.gray[6],
            },
          })}
          w="100%"
        >
          <PreviewCard title={title} description={description} slug={slug} />
        </Anchor>
      </NextLink>
    </Box>
  );
}
