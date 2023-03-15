import { Box, Title } from '@mantine/core';
import React from 'react';
import { UploadImageForm } from './UploadImageForm';

export const UploadImageContainer = () => {
  return (
    <Box>
      <Title order={1} fz={36}>
        Upload Existing Image
      </Title>
      <UploadImageForm />
    </Box>
  );
};
