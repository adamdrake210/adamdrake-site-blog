import React from 'react';
import { Skill } from './data/skillsData';
import { Box, Flex } from '@mantine/core';

type Props = {
  skill: Skill;
};

export const SkillCard = ({ skill }: Props) => {
  return (
    <Flex direction="column" align="center" justify="center" h="100%">
      <Box dangerouslySetInnerHTML={{ __html: skill.svg }} w={64} h={'auto'} />
    </Flex>
  );
};
