import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useMantineTheme } from '@mantine/core';

export const AnimateProgress = () => {
  const theme = useMantineTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: 68,
        left: 0,
        right: 0,
        height: 5,
        background: theme.colors.blue[5],
        transformOrigin: '0%',
        zIndex: 1000,
      }}
    />
  );
};
