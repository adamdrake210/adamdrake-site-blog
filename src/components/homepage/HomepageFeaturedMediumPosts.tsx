import React from 'react';
import {
  Card,
  Box,
  Button,
  Flex,
  Text,
  Title,
  Grid,
  Center,
  CardSection,
  Image,
} from '@mantine/core';
import NextLink from 'next/link';
import { MediumSubscribeButton } from 'components/common/buttons/MediumSubscribeButton';

const featuredPosts = [
  {
    slug: 'its-the-perfect-time-to-be-a-senior-developer',
    title: 'It’s the Perfect Time to be a Senior Developer',
    image:
      'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*XOs-7X6kZn410jZRebxnvg.png',
    summary:
      'Why senior/experienced devs are perfectly poised to leverage AI—and how your high-level perspective offers a big career advantage in the new era.',
    mediumUrl: 'https://medium.com/p/9bfb53fca535',
  },
  {
    slug: 'using-the-atlassian-mcp-server-in-cursor',
    title: 'Using the Atlassian MCP server in Cursor',
    image:
      'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*x2Swk7sY439NC06pVRJ7sg.png',
    summary:
      'How the Atlassian MCP server can supercharge your workflow with Jira and Confluence inside Cursor. Real-world dev experience and setup steps.',
    mediumUrl: 'https://medium.com/p/3b2b193b70be',
  },
  {
    slug: 'my-new-favourite-stack-tanstack-start-laravel-postgres-and-mantine',
    title:
      'My New Favourite Stack — Tanstack Start, Laravel, Postgres and Mantine',
    image:
      'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*z3J76v8ZpPdT4gpjjKHFqw.png',
    summary:
      'The modern stack that’s helped me launch personal projects with speed: Tanstack Start, Mantine, Laravel, and Postgres. Why they work so well together.',
    mediumUrl: 'https://medium.com/p/95b161a7b73c',
  },
];

type Props = {};

const HomepageFeaturedMediumPosts = ({}: Props) => {
  return (
    <Box w="100%" mt={24} mb={24}>
      <Title order={2} fz={{ base: 32, md: 48 }} mb={24} ta="center">
        Featured Articles on Medium
      </Title>
      <Grid gutter={24}>
        {featuredPosts.map(post => (
          <Grid.Col key={post.slug} span={{ base: 12, sm: 12, md: 4 }}>
            <Card shadow="sm" padding="lg" radius="md" h="100%" withBorder>
              <Card.Section>
                <Image src={post.image} alt={post.title} height={180} />
              </Card.Section>
              <Flex direction="column" h="100%" justify="space-between">
                <Box my={16}>
                  <Title order={3} fz={{ base: 20, md: 24 }} mb={10}>
                    {post.title}
                  </Title>
                  <Text fz="md" mb={6} c="dimmed">
                    {post.summary}
                  </Text>
                </Box>
                <Flex mt={10} gap={8} justify="flex-end">
                  <NextLink href={`/blog/${post.slug}`} passHref legacyBehavior>
                    <Button variant="light">Read Excerpt</Button>
                  </NextLink>
                </Flex>
              </Flex>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
      <Center my={32}>
        <MediumSubscribeButton />
      </Center>
    </Box>
  );
};

export default HomepageFeaturedMediumPosts;
