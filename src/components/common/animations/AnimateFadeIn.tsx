import React from 'react';
import { motion } from 'framer-motion';

export const AnimateFadeIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      style={{ width: '100%' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.2,
      }}
    >
      {children}
    </motion.div>
  );
};
