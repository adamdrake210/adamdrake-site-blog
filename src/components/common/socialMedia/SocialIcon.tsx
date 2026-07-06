import React from 'react';
import { Tooltip } from '@mantine/core';
import { motion } from 'framer-motion';

type Props = {
  label: string;
  icon: React.ReactNode;
  href: string;
  index: number;
};

export const SocialIcon = ({ label, icon, href, index }: Props) => {
  return (
    <Tooltip label={label} events={{ hover: true, focus: true, touch: true }}>
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        className="social-icon"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15 + index * 0.1,
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        whileHover={{ scale: 1.12, rotate: -6 }}
        whileTap={{ scale: 0.94 }}
      >
        {icon}
      </motion.a>
    </Tooltip>
  );
};
