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

  // The image never renders wider than the column, so tell the browser that
  // rather than the source width — otherwise it picks a 2048px (3840px on
  // retina) candidate off the srcset for a slot this small.
  const renderedWidth = Math.min(width, BLOG_CONTENT_WIDTH);

  return (
    <Box
      pos="relative"
      w="100%"
      // Never upscale past the image's own resolution — older posts ship
      // 600px screenshots that would go soft if stretched to the column.
      maw={width}
      // Reserve the space up front so the text below doesn't jump on load.
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
          // The 64px accounts for the two nested px={16} wrappers, which
          // 100vw would otherwise ignore.
          sizes={`(max-width: 768px) calc(100vw - 64px), ${renderedWidth}px`}
          style={{ width: '100%', height: 'auto' }}
          onLoad={() => setLoaded(true)}
        />
      </motion.div>
    </Box>
  );
};
