import { Anchor, Flex } from '@mantine/core';
import React from 'react';

type Props = {
  title: string;
  writtenBy: string;
  url: string;
};

export const SocialShareBlogPost = ({ title, writtenBy, url }: Props) => {
  return (
    <Flex justify="space-between" mb={8} px={16}>
      <Anchor
        fw={700}
        target="_blank"
        referrerPolicy="no-referrer"
        href={`https://twitter.com/intent/tweet?url=${url}&text=I+just+read+${title}+by+${writtenBy}`}
      >
        Tweet this article
      </Anchor>
      <Anchor
        fw={700}
        target="_blank"
        referrerPolicy="no-referrer"
        href={`https://twitter.com/search?q=${url}`}
      >
        Discuss on Twitter
      </Anchor>
    </Flex>
  );
};
