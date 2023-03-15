import { Box, Title } from '@mantine/core';
import React from 'react';
import { CreateBlogPostForm } from './CreateBlogPostForm';

export const CreateBlogPostContainer = () => {
  return (
    <Box>
      <Title order={1} fz={36}>
        Create Blog Post
      </Title>
      <CreateBlogPostForm />
    </Box>
  );
};
