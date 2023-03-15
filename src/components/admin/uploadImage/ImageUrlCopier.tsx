import React from 'react';
import { ActionIcon, Box, Flex, Text, Title, Tooltip } from '@mantine/core';
import { IconClipboard } from '@tabler/icons-react';
import { useClipboard } from '@mantine/hooks';

type Props = {
  cloudinaryUrl: string;
};

export const ImageUrlCopier = ({ cloudinaryUrl }: Props) => {
  const clipboard = useClipboard({ timeout: 1000 });

  return (
    <Box my={32}>
      <Title order={2}>Cloudinary URL</Title>
      <Flex align="center">
        <Text>Cloudinary URL: {cloudinaryUrl}</Text>
        <Tooltip label="Copied!" opened={clipboard.copied}>
          <ActionIcon onClick={() => clipboard.copy(cloudinaryUrl)}>
            <IconClipboard />
          </ActionIcon>
        </Tooltip>
      </Flex>
    </Box>
  );
};
