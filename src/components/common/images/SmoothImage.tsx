import React, { useState } from 'react';
import { Box, Skeleton } from '@mantine/core';
import { motion } from 'framer-motion';

type Props = {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  radius?: string | number;
};

export const SmoothImage = ({
  src,
  alt,
  width = '100%',
  height = 'auto',
  radius = 0,
}: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box pos="relative" w={width} style={{ overflow: 'hidden', borderRadius: radius }}>
      {!loaded && (
        <Skeleton
          w="100%"
          h={typeof height === 'number' ? height : 200}
          radius={radius}
        />
      )}
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          width: '100%',
          height: height,
          objectFit: 'cover',
          display: loaded ? 'block' : 'none',
          borderRadius: typeof radius === 'number' ? radius : undefined,
        }}
      />
    </Box>
  );
};
