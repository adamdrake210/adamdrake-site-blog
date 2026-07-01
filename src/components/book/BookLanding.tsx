import React from 'react';
import { Badge, Box, Button, Flex, Spoiler, Text, Title } from '@mantine/core';
import { IconBrandAmazon } from '@tabler/icons-react';

import {
  BOOK_AVAILABILITY,
  BOOK_FORMAT,
  BOOK_INTRO_PARAGRAPHS,
  BOOK_MARKETING_PARAGRAPHS,
  BOOK_PURCHASE_URL,
  BOOK_SERIES_NAME,
  BOOK_SUBTAGLINE,
  BOOK_TAGLINE,
  BOOK_TITLE,
} from 'constants/constants';
import { AnimateFadeIn } from 'components/common/animations/AnimateFadeIn';
import { CustomDivider } from 'components/common/CustomDivider';
import { BookCoverPlaceholder } from './BookCoverPlaceholder';

const BuyOnKindleButton = () => (
  <Button
    component="a"
    href={BOOK_PURCHASE_URL}
    variant="filled"
    size="lg"
    color="dark"
    radius="md"
    leftSection={<IconBrandAmazon />}
    w={{ base: '100%', xs: 240 }}
  >
    Buy on Kindle
  </Button>
);

export const BookLanding: React.FC = () => {
  return (
    <AnimateFadeIn>
      <Box p={16}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          gap={32}
          my={16}
        >
          <BookCoverPlaceholder width={240} />
          <Box style={{ textAlign: 'left' }}>
            <Text size="sm" fw={500} c="dimmed" mb={4}>
              {BOOK_SERIES_NAME} — Book One
            </Text>
            <Title order={1} mb={16} fz={{ base: 32, md: 48 }}>
              {BOOK_TITLE}
            </Title>
            <Text mb={16} fz={{ base: 20, md: 24 }}>
              {BOOK_TAGLINE}
            </Text>
            <Text mb={24} size="lg" c="dimmed">
              {BOOK_SUBTAGLINE}
            </Text>
            <Flex
              direction={{ base: 'column', xs: 'row' }}
              align={{ base: 'stretch', xs: 'center' }}
              gap={16}
              mb={16}
            >
              <BuyOnKindleButton />
              <Badge color="myColor" variant="light" size="lg">
                {BOOK_AVAILABILITY}
              </Badge>
            </Flex>
            <Text size="sm" c="dimmed">
              Available as a {BOOK_FORMAT}
            </Text>
          </Box>
        </Flex>

        <CustomDivider />

        <Box maw="720px" m="0 auto">
          {BOOK_MARKETING_PARAGRAPHS.map(paragraph => (
            <Text key={paragraph} mb={16} size="xl">
              {paragraph}
            </Text>
          ))}

          <Box mt={32}>
            <Title order={3} mb={16}>
              Read the introduction
            </Title>
            <Spoiler
              maxHeight={160}
              showLabel="Read the full introduction"
              hideLabel="Show less"
            >
              {BOOK_INTRO_PARAGRAPHS.map(paragraph => (
                <Text key={paragraph} mb={16} size="lg">
                  {paragraph}
                </Text>
              ))}
            </Spoiler>
          </Box>
        </Box>

        <CustomDivider />

        <Flex direction="column" align="center" my={32} gap={16}>
          <Text size="lg" fw={500}>
            Ready to find out what&apos;s actually happening?
          </Text>
          <BuyOnKindleButton />
        </Flex>
      </Box>
    </AnimateFadeIn>
  );
};
