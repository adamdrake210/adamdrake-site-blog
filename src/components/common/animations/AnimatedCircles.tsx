import React from 'react';
import { motion } from 'framer-motion';
import { useMantineTheme } from '@mantine/core';

export const AnimatedCircles = () => {
  const theme = useMantineTheme();

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <motion.svg
      width="60"
      height="20"
      viewBox="0 0 60 20"
      initial="hidden"
      animate="visible"
      style={{
        marginTop: 24,
      }}
    >
      <motion.circle
        cx="10"
        cy="10"
        r="6"
        stroke={theme.colors.gray[5]}
        variants={draw}
        custom={1}
        style={{
          strokeWidth: 2,
          strokeLinecap: 'round',
          fill: 'transparent',
        }}
      />
      <motion.circle
        cx="30"
        cy="10"
        r="6"
        stroke={theme.colors.gray[6]}
        variants={draw}
        custom={2}
        style={{
          strokeWidth: 2,
          strokeLinecap: 'round',
          fill: 'transparent',
        }}
      />
      <motion.circle
        cx="50"
        cy="10"
        r="6"
        stroke={theme.colors.gray[7]}
        variants={draw}
        custom={3}
        style={{
          strokeWidth: 2,
          strokeLinecap: 'round',
          fill: 'transparent',
        }}
      />
    </motion.svg>
  );
};
