import React from 'react';
import { Flex, Title } from '@mantine/core';
import { SkillsBanner } from './SkillsBanner';

export const SkillsBannerContainer = () => {
  return (
    <Flex direction="column" align="center" my={4} w="100%">
      <Title order={2} mb={24}>
        Skills
      </Title>
      <SkillsBanner />
    </Flex>
  );
};
