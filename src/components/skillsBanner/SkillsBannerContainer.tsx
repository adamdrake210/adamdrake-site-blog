import React from 'react';
import { Box, Flex, Title } from '@mantine/core';
import { SkillsBanner } from './SkillsBanner';
import { RollingButton } from 'components/common/buttons/RollingButton';
import { HIRE_ME_ROUTE } from 'constants/routeConstants';

export const SkillsBannerContainer = () => {
  return (
    <Flex direction="column" align="center" my={4} w="100%">
      <Title order={2} mb={24}>
        Technical Skills & Tools
      </Title>
      <SkillsBanner />
      <Box mt={32}>
        <RollingButton
          label="Find out more"
          href={`${HIRE_ME_ROUTE}#experience`}
        />
      </Box>
    </Flex>
  );
};
