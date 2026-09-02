import React, { useState } from 'react';
import { Box, MantineRadius, Skeleton } from '@mantine/core';
import { motion } from 'framer-motion';
import NextImage from 'next/image';

type Props = {
  src: string;
  alt: string;
  sizes: string;
  height?: number;
  radius?: MantineRadius | number;
  aspectRatio?: number;
  priority?: boolean;
};

export const SmoothImage = ({
  src,
  alt,
  sizes,
  height,
  radius = 0,
  aspectRatio,
  priority = false,
}: Props) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  if (!src || failed) return null;

  const borderRadius =
    typeof radius === 'number' ? radius : `var(--mantine-radius-${radius})`;

  return (
    <Box
      pos="relative"
      w="100%"
      h={aspectRatio ? undefined : height}
      style={{
        overflow: 'hidden',
        borderRadius,
        ...(aspectRatio ? { aspectRatio: String(aspectRatio) } : {}),
      }}
    >
      {!loaded && (
        <Skeleton
          style={{ position: 'absolute', inset: 0 }}
          w="100%"
          h="100%"
          radius={radius}
        />
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <NextImage
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          style={{ objectFit: 'cover' }}
        />
      </motion.div>
    </Box>
  );
};
