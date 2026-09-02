import React from 'react';
import NextLink from 'next/link';
import { Text, useMantineTheme } from '@mantine/core';
import { motion } from 'framer-motion';
import { useNightMode } from 'context/NightModeContext';

export const NavBrand = () => {
  const theme = useMantineTheme();
  const { night } = useNightMode();

  const accentColor = night
    ? theme.colors.secondary[4]
    : theme.colors.myColor[8];

  return (
    <NextLink href="/" style={{ textDecoration: 'none' }}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        <Text
          fz={26}
          px={16}
          style={{
            fontFamily: "'Red Hat Display', sans-serif",
            letterSpacing: '0.5px',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          <span style={{ fontWeight: 700 }}>adam</span>
          <span
            style={{
              color: accentColor,
              fontWeight: 800,
              margin: '0 3px',
            }}
          >
            .
          </span>
          <span style={{ fontWeight: 300 }}>drake</span>
        </Text>
      </motion.div>
    </NextLink>
  );
};
