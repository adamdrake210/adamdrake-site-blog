import React, { useEffect, useMemo, useState } from 'react';
import { Grid } from '@mantine/core';
import { motion } from 'framer-motion';
import { Skill, skillsData } from './data/skillsData';
import { SkillCard } from './SkillCard';

export const SkillsBanner = () => {
  const [modSkills, setModSkills] = useState<Skill[]>([]);

  const twinkleVariants = useMemo(
    () =>
      skillsData.map(() => ({
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 3,
      })),
    []
  );

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
      {modSkills?.map((skill, i) => (
        <Grid.Col key={skill.id} span={2}>
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: twinkleVariants[i].duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: twinkleVariants[i].delay,
            }}
          >
            <SkillCard skill={skill} />
          </motion.div>
        </Grid.Col>
      ))}
    </Grid>
  );
};
