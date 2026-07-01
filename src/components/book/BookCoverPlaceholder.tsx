import React from 'react';
import { Box, Text, useMantineTheme } from '@mantine/core';
import { IconBook2 } from '@tabler/icons-react';
import { BOOK_SERIES_NAME, BOOK_TITLE } from 'constants/constants';

type Props = {
  width?: number;
};

export const BookCoverPlaceholder = ({ width = 240 }: Props) => {
  const theme = useMantineTheme();

  return (
    <Box
      w={width}
      h={width * 1.55}
      p={16}
      style={{
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 8,
        border: `1px solid ${theme.colors.myColor[3]}`,
        background: `linear-gradient(160deg, ${theme.colors.myColor[1]}, ${theme.colors.myColor[3]})`,
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
      }}
    >
      <IconBook2 size={width * 0.3} color={theme.colors.myColor[8]} />
      <Text mt={12} fw={500} size={width < 180 ? 'sm' : 'md'}>
        {BOOK_SERIES_NAME}
      </Text>
      <Text size={width < 180 ? 'xs' : 'sm'} c={theme.colors.myColor[7]}>
        {BOOK_TITLE}
      </Text>
      <Text mt={8} size="xs" c={theme.colors.myColor[6]} fs="italic">
        Cover coming soon
      </Text>
    </Box>
  );
};
