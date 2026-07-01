import React from 'react';
import { Box, Button, Flex, Text, Title, useMantineTheme } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

import { BOOK_ROUTE } from 'constants/routeConstants';
import {
  BOOK_SERIES_NAME,
  BOOK_TAGLINE,
  BOOK_TITLE,
} from 'constants/constants';
import { BookCoverPlaceholder } from 'components/book/BookCoverPlaceholder';

export const BookTeaserCard = () => {
  const theme = useMantineTheme();

  return (
    <Box
      component="section"
      w="100%"
      p={24}
      style={{
        borderRadius: 8,
        border: `1px solid ${theme.colors.myColor[3]}`,
        backgroundColor: theme.colors.myColor[0],
      }}
    >
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        align="center"
        gap={24}
      >
        <BookCoverPlaceholder width={120} />
        <Box style={{ textAlign: 'left', flexGrow: 1 }}>
          <Text size="sm" fw={500} c="dimmed" mb={4}>
            New book
          </Text>
          <Title order={2} mb={8} fz={{ base: 24, md: 30 }}>
            {BOOK_SERIES_NAME}: {BOOK_TITLE}
          </Title>
          <Text mb={16} c="dimmed">
            {BOOK_TAGLINE}
          </Text>
          <Button
            component="a"
            href={BOOK_ROUTE}
            variant="subtle"
            color="dark"
            rightSection={<IconArrowRight size={16} />}
            px={0}
          >
            Learn more
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
