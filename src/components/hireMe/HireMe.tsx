import React from 'react';

import { Badge, Box, Button, Divider, Flex, Text, Title } from '@mantine/core';
import { IconMail } from '@tabler/icons-react';

import { AnimateFadeIn } from 'components/common/animations/AnimateFadeIn';
import { CONTACT_EMAIL, CV_DOWNLOAD_URL } from 'constants/constants';

import { HireMeHero } from './HireMeHero';
import { AIWorkflowPanel } from './AIWorkflowPanel';
import { ToolkitSection } from './ToolkitSection';
import { ExperienceTimeline } from './ExperienceTimeline';
import { languagesData } from './data/toolkitData';

export const HireMe: React.FC = () => {
  return (
    <AnimateFadeIn>
      <Box p={16}>
        <HireMeHero />
        <AIWorkflowPanel />
        <ToolkitSection />
        <ExperienceTimeline />

        <Box my={40}>
          <Title order={2} mb={16}>
            Languages
          </Title>
          <Flex gap={12}>
            {languagesData.map(({ language, level }) => (
              <Badge key={language} variant="outline" color="myColor.8" size="lg">
                {language} — {level}
              </Badge>
            ))}
          </Flex>
        </Box>

        <Divider my={32} />

        <Flex direction="column" align="center" my={24} gap={16}>
          <Text size="lg" ta="center">
            Interested in working together?
          </Text>
          <Flex gap={16} wrap="wrap" justify="center">
            <Button
              component="a"
              href={CV_DOWNLOAD_URL}
              download
              size="md"
              color="myColor.8"
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
          </Flex>
        </Flex>
      </Box>
    </AnimateFadeIn>
  );
};
