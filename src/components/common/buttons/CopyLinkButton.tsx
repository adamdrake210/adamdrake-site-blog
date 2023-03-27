import { Button } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import React from 'react';

type Props = {
  url: string;
};

export const CopyLinkButton = ({ url }: Props) => {
  const clipboard = useClipboard({ timeout: 1000 });

  return (
    <Button
      variant="outline"
      size="xs"
      sx={{ position: 'absolute', zIndex: 20, bottom: 16, left: 16 }}
      onClick={() => clipboard.copy(url)}
    >
      {clipboard.copied ? 'Copied Link!' : 'Copy Blog Link'}
    </Button>
  );
};
