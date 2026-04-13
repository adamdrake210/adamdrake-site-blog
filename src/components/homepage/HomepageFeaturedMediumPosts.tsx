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
import { BlogButtons } from './BlogButtons';

const featuredPosts = [
  {
    slug: 'software-developers-will-be-thriving-in-5-years-despite-what-your-youtube-feed-says',
    title:
      'Software Developers Will Be Thriving in 5 Years (Despite What Your YouTube Feed Says)',
    image:
      'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*0K97PqU0afCpYJA5zAEhFw.png',
    summary:
      '2025 has been an extraordinary year for Generative AI. My Youtube feed has been overrun with AI headlines all telling me “AI will replace you”.',
    mediumUrl:
      'https://medium.com/javascript-in-plain-english/software-developers-will-be-thriving-in-5-years-despite-what-your-youtube-feed-says-4898d4af4663',
  },
  {
    slug: 'claude-code-just-released-a-feature-that-genuinely-scares-me-and-i-use-ai-every-day',
    title:
      'Claude Code Just Released a Feature That Genuinely Scares Me (And I Use AI Every Day)',
    image:
      'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Z8EPL6SGy4TAJ9dftVkgfQ.png',
    summary:
      'I was watching Netflix with my family the other night. It was the Musical version of Matilda. I was very much “On” even though I should have been relaxing.',
    mediumUrl:
      'https://medium.com/gitconnected/claude-code-just-released-a-feature-that-genuinely-scares-me-and-i-use-ai-every-day-4f23cd3051c0',
  },
  {
    slug: 'its-the-perfect-time-to-be-a-senior-developer',
    title: 'It’s the Perfect Time to be a Senior Developer',
    image:
      'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*XOs-7X6kZn410jZRebxnvg.png',
    summary:
      'Why senior/experienced devs are perfectly poised to leverage AI—and how your high-level perspective offers a big career advantage in the new era.',
    mediumUrl: 'https://medium.com/p/9bfb53fca535',
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
                  <NextLink href={`/blog/${post.slug}`} passHref>
                    <Button variant="light">Read Article</Button>
                  </NextLink>
                </Flex>
              </Flex>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
      <BlogButtons />
    </Box>
  );
};

export default HomepageFeaturedMediumPosts;
