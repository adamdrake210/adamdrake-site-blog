import React, { useState } from 'react';
import { Box, Skeleton } from '@mantine/core';
import { motion } from 'framer-motion';
import NextImage from 'next/image';

import { BLOG_CONTENT_WIDTH } from 'constants/constants';

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const SmoothNextImage = ({ src, alt, width, height }: Props) => {
  const [loaded, setLoaded] = useState(false);

  if (!src) return null;

  const renderedWidth = Math.min(width, BLOG_CONTENT_WIDTH);

  return (
    <Box
      pos="relative"
      w="100%"
      maw={width}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {!loaded && (
        <Skeleton
          style={{ position: 'absolute', inset: 0 }}
          w="100%"
          h="100%"
        />
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ width: '100%' }}
      >
        <NextImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={`(max-width: 768px) calc(100vw - 64px), ${renderedWidth}px`}
          style={{ width: '100%', height: 'auto' }}
          onLoad={() => setLoaded(true)}
        />
      </motion.div>
    </Box>
  );
};
