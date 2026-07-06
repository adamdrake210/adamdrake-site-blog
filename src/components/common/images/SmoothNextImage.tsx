import React, { useState } from 'react';
import { Box, Skeleton } from '@mantine/core';
import { motion } from 'framer-motion';
import NextImage from 'next/image';

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const SmoothNextImage = ({ src, alt, width, height }: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box pos="relative" w={width} h={height}>
      {!loaded && <Skeleton w={width} h={height} />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <NextImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoad={() => setLoaded(true)}
        />
      </motion.div>
    </Box>
  );
};
