import { Box } from '@mantine/core';
import React from 'react';

import { PreviewCard } from './PreviewCard';

type Props = {
  slug: string;
  title: string;
  description: string;
};

const BlogPreviewCard = ({ slug, title, description }: Props) => {
  return (
    <Box
      w="100%"
      p={4}
      mb={16}
      sx={{
        borderBottom: '2px solid #00A3C4',
      }}
    >
      <PreviewCard title={title} description={description} slug={slug} />
    </Box>
  );
};

export default BlogPreviewCard;
