import React from 'react';

import { Box, Divider, Flex, Text, Title } from '@mantine/core';
import { SocialLinks } from 'components/common/socialMedia/SocialLinks';
import { AnimateFadeIn } from 'components/common/animations/AnimateFadeIn';
import { SelfieImage } from 'components/common/images/SelfieImage';
import { useMediaQuery } from '@mantine/hooks';

export const About: React.FC = () => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  return (
    <AnimateFadeIn>
      <Box p={16}>
        <Title order={1} mb={16}>
          About Me
        </Title>
        <Flex
          justify={isSmallScreen ? 'center' : 'space-between'}
          my={16}
          direction={isSmallScreen ? 'column-reverse' : 'row'}
        >
          <Box>
            <SelfieImage maxWidth={200} />
          </Box>
        </Flex>
        <Text mb={16} size="xl">
          As a <b>Staff Frontend Engineer</b> at Chemify, I am deeply passionate
          about the quality of the web. I specialise in working with React,
          Redux, JavaScript, TypeScript, Next.js, Node.js, Vite, AWS, Docker,
          and Vitest on a daily basis. I thrive on building React-based
          applications, designing robust front-end architectures, and developing
          efficient Backend APIs. Over the years, I&apos;ve learned to love the
          process of coding and continuously strive for excellence.
        </Text>
        <Text mb={16} size="xl">
          <b>Design</b> fascinates me, and I find immense inspiration in
          encountering great designs. Although my design skills are not my
          strongest asset, my passion for it drives me to create software that
          lies at the intersection of design and engineering &ndash; ensuring
          that what I build looks good and functions seamlessly.
        </Text>
        <Text mb={16} size="xl">
          Balancing both creative and logical thinking has always been a part of
          who I am. I take pride in writing clean, elegant (occasionally), and
          efficient code. My journey to becoming a <b>JavaScript developer</b>{' '}
          was marked by determination; I vividly remember aspiring to this goal,
          writing it down, and sticking it on my wall. After five years of hard
          work, I finally achieved it.
        </Text>
        <Text mb={16} size="xl">
          In addition to coding, I thoroughly enjoy <b>writing articles</b>{' '}
          about the frontend world and software development in general. Sharing
          knowledge and insights with the community is something I find
          incredibly rewarding. It allows me to connect with fellow developers,
          contribute to the growth of the field, and continuously learn from
          others.
        </Text>
        <Text mb={16} size="xl">
          My love for software development traces back to my university days
          when I built my first website for my band. While I played bass guitar
          and music has always been a part of my life, I am more of an admirer
          than a practitioner of musical talent.
        </Text>
        <Text mb={16} size="xl">
          Also I don&rsquo;t eat meat, I run and I watch films with my amazing
          wife and kids.
        </Text>
        <Divider />
        <Flex justify="center" my={24}>
          <SocialLinks />
        </Flex>
      </Box>
    </AnimateFadeIn>
  );
};
