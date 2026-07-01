import React from 'react';

import {
  Box,
  Button,
  Flex,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import {
  IconDownload,
  IconMail,
  IconMapPin,
} from '@tabler/icons-react';

import {
  CONTACT_EMAIL,
  CV_DOWNLOAD_URL,
  GITHUB_URL,
  LINKEDIN_URL,
} from 'constants/constants';
import { GithubLogo } from 'assets/icons/GithubLogo';
import { LinkedInLogo } from 'assets/icons/LinkedInLogo';
import { SocialIcon } from 'components/common/socialMedia/SocialIcon';

export const HireMeHero: React.FC = () => {
  const theme = useMantineTheme();
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  return (
    <Box
      p={isSmallScreen ? 24 : 40}
      style={{
        background: `linear-gradient(135deg, ${theme.colors.myColor[0]} 0%, ${theme.colors.myColor[2]} 100%)`,
        borderRadius: 12,
      }}
    >
      <Title order={1} fw={600} mb={4}>
        Adam Drake
      </Title>
      <Text
        size="lg"
        mb={16}
        style={{ fontFamily: theme.headings.fontFamily, letterSpacing: 0.5 }}
      >
        Staff Frontend Engineer &middot; Full-stack, frontend-focused
      </Text>

      <Flex align="center" gap={6} mb={24} c={theme.colors.gray[6]}>
        <IconMapPin size={18} />
        <Text size="sm">Prague, CZ</Text>
      </Flex>

      <Text size="xl" maw={720} mb={32}>
        Staff frontend engineer with 10+ years working with React and building
        frontend architecture at scale — from eBay&apos;s static-pages
        platform to a fast-growing drug-discovery startup. I work full-stack
        with a frontend focus: shipping production React and TypeScript,
        designing the APIs behind it, and owning features end to end from
        requirements through deployment.
      </Text>

      <Flex
        gap={16}
        align="center"
        wrap="wrap"
        direction={isSmallScreen ? 'column' : 'row'}
      >
        <Button
          component="a"
          href={CV_DOWNLOAD_URL}
          download
          size="md"
          color="myColor.8"
          leftSection={<IconDownload size={18} />}
        >
          Download CV
        </Button>
        <Button
          component="a"
          href={`mailto:${CONTACT_EMAIL}`}
          size="md"
          variant="outline"
          color="myColor.8"
          leftSection={<IconMail size={18} />}
        >
          {CONTACT_EMAIL}
        </Button>

        <Flex align="center">
          <SocialIcon
            label="LinkedIn"
            icon={<LinkedInLogo />}
            href={LINKEDIN_URL}
          />
          <SocialIcon label="GitHub" icon={<GithubLogo />} href={GITHUB_URL} />
        </Flex>
      </Flex>
    </Box>
  );
};
