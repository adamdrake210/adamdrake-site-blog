import React from 'react';
import { ActionIcon, Box, Flex, Text, Title, Tooltip } from '@mantine/core';
import { IconClipboard } from '@tabler/icons-react';
import { useClipboard } from '@mantine/hooks';

type Props = {
  textToCopy: string;
  title: string;
};

export const TextCopier = ({ textToCopy, title }: Props) => {
  const clipboard = useClipboard({ timeout: 1000 });

  return (
    <Box my={32}>
      <Title order={2}>{title}</Title>
      <Flex align="center">
        <Text fz="lg">{`${textToCopy}`}</Text>
        <Tooltip label="Copied!" opened={clipboard.copied}>
          <ActionIcon onClick={() => clipboard.copy(textToCopy)}>
            <IconClipboard />
          </ActionIcon>
        </Tooltip>
      </Flex>
    </Box>
  );
};
