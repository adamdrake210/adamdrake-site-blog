import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  duration?: number;
};

export const AnimateFadeIn = ({ children, duration = 1.2 }: Props) => {
  return (
    <motion.div
      style={{ width: '100%' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration,
      }}
    >
      {children}
    </motion.div>
  );
};
