import React, { useEffect, useState } from 'react';
import { Grid, useMantineTheme } from '@mantine/core';
import { Skill, skillsData } from './data/skillsData';
import { SkillCard } from './SkillCard';

export const SkillsBanner = () => {
  const [modSkills, setModSkills] = useState<Skill[]>([]);

  useEffect(() => {
    if (skillsData?.length === 0) {
      return;
    }
    const modifiedSkills = skillsData.map(skill => {
      const svg = skill.svg.replace(/<svg/, `<svg width="80" height="80"`);
      return { ...skill, svg };
    });
    setModSkills(modifiedSkills);
  }, []);

  return (
    <Grid grow gutter={'lg'} w="100%">
      {modSkills?.map(skill => (
        <Grid.Col key={skill.id} span={2}>
          <SkillCard skill={skill} />
        </Grid.Col>
      ))}
    </Grid>
  );
};
