import React from 'react';
import {
  Title,
  Text,
  List,
  ThemeIcon,
  Divider,
  Anchor,
  Box,
  Center,
} from '@mantine/core';
import {
  IconMail,
  IconThumbUp,
  IconCoffee,
  IconCheck,
  IconUsers,
  IconInfoCircle,
  IconBrandLinkedin,
  IconBrandGithub,
} from '@tabler/icons-react';
import {
  BUY_ME_A_COFFEE_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  MEDIUM_SUBSCRIBE_URL,
} from 'constants/constants';
import { MediumSubscribeButton } from 'components/common/buttons/MediumSubscribeButton';

const AboutMeBlurb = () => {
  return (
    <Box mb={32} p={16}>
      <Title order={2} mb={6} fw={700}>
        Subscribe to My Weekly Updates on Medium!
      </Title>
      <Text size="xl" mt={8} fw={600}>
        Enjoyed This Post?
      </Text>
      <Text mt={8}>
        If you found this blog post helpful, why not stay updated with my latest
        content?{' '}
        <Anchor
          href={MEDIUM_SUBSCRIBE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Subscribe to receive email notifications every time I publish.
        </Anchor>
      </Text>
      <Text mt={8}>
        If you&#39;re feeling really generous you can{' '}
        <Anchor
          href={BUY_ME_A_COFFEE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          buy me a coffee
        </Anchor>
        . (Btw, I really like coffee…)
      </Text>
      <Divider my={20} />
      <Title order={3} mt={10} mb={6} fw={600}>
        What You&#39;ll Get
      </Title>
      <List size="md" spacing="xs">
        <List.Item>
          <strong>Exciting Discoveries:</strong> Be the first to know about the
          latest tools and libraries.
        </List.Item>
        <List.Item>
          <strong>How-To Guides:</strong> Step-by-step articles to enhance your
          development skills.
        </List.Item>
        <List.Item>
          <strong>Opinion Pieces:</strong> Thought-provoking insights into the
          world of frontend development.
        </List.Item>
      </List>
      <Divider my={20} />
      <Title order={3} mt={10} mb={6} fw={600}>
        Join Our Community
      </Title>
      <Text>
        I live in the vibrant city of Prague, Czech Republic, with my family. My
        blog is more than just articles; it&#39;s a community of like-minded
        developers who share a love for innovation and learning.
      </Text>
      <Title order={3} mt={18} fw={600}>
        About me
      </Title>
      <Text>
        I&#39;m a passionate Frontend Developer specialising in React and
        TypeScript. My professional journey revolves around exploring and
        mastering new tools and libraries within the JavaScript ecosystem.
      </Text>
      <Text mt={10}>
        Check out my{' '}
        <Anchor
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'underline', fontWeight: 'bold' }}
        >
          LinkedIn
        </Anchor>{' '}
        and{' '}
        <Anchor
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'underline', fontWeight: 'bold' }}
        >
          Github
        </Anchor>{' '}
        if you are interested.
      </Text>

      <Center my={32}>
        <MediumSubscribeButton
          buttomText="Subscribe on Medium"
          buttonWidth={'auto'}
        />
      </Center>
    </Box>
  );
};

export default AboutMeBlurb;
