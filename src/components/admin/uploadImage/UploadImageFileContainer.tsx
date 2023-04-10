import React from 'react';
import { Box, Title } from '@mantine/core';
import { UploadImageFileForm } from './UploadImageFileForm';

export const UploadImageFileContainer = () => {
  return (
    <Box>
      <Title order={1} fz={36}>
        Upload Image File
      </Title>
      <UploadImageFileForm />
    </Box>
  );
};
