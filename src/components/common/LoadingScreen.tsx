import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flex, Text, useMantineTheme } from '@mantine/core';
import { useNightMode } from 'context/NightModeContext';

let hasLoadedBefore = false;

type Props = {
  children: React.ReactNode;
};

export const LoadingScreen = ({ children }: Props) => {
  const theme = useMantineTheme();
  const { night } = useNightMode();
  const skipRef = useRef(hasLoadedBefore);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(!skipRef.current);

  useEffect(() => {
    if (skipRef.current) return;

    const duration = 2000;
    const steps = 100;
    const interval = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= steps) {
        clearInterval(timer);
        hasLoadedBefore = true;
        setTimeout(() => setLoading(false), 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loading-screen"
            initial={{ y: 0 }}
            exit={{ y: '100vh' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              backgroundColor: night
                ? theme.colors.dark[7]
                : theme.colors.myColor[9],
            }}
          >
            <Flex align="center" justify="center" h="100vh" direction="column">
              <Text
                ff="'Red Hat Display', serif"
                fw={200}
                c={night ? theme.colors.myColor[0] : theme.colors.myColor[0]}
                style={{ fontSize: 32, lineHeight: 1 }}
              >
                {count}
              </Text>
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
};
