import React, { useState } from 'react';
import { Box, Skeleton } from '@mantine/core';
import { motion } from 'framer-motion';

type Props = {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  radius?: string | number;
  /**
   * Reserves space via CSS aspect-ratio before the image lands, so content
   * below doesn't jump. Callers that crop to a fixed pixel height (BlogCard)
   * should leave this unset and keep using `height`.
   */
  aspectRatio?: number;
};

export const SmoothImage = ({
  src,
  alt,
  width = '100%',
  height = 'auto',
  radius = 0,
  aspectRatio,
}: Props) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  // A missing src never fires onLoad, and a dead URL only fires onError —
  // either way the Skeleton below would sit there as a grey box forever.
  // Worth guarding: 36 posts hotlink miro.medium.com, which rotates URLs.
  if (!src || failed) return null;

  return (
    <Box
      pos="relative"
      w={width}
      style={{
        overflow: 'hidden',
        borderRadius: radius,
        ...(aspectRatio ? { aspectRatio: String(aspectRatio) } : {}),
      }}
    >
      {!loaded && (
        <Skeleton
          style={aspectRatio ? { position: 'absolute', inset: 0 } : undefined}
          w="100%"
          h={aspectRatio ? '100%' : typeof height === 'number' ? height : 200}
          radius={radius}
        />
      )}
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          width: '100%',
          height: aspectRatio ? '100%' : height,
          objectFit: 'cover',
          display: loaded ? 'block' : 'none',
          borderRadius: typeof radius === 'number' ? radius : undefined,
          ...(aspectRatio ? ({ position: 'absolute', inset: 0 } as const) : {}),
        }}
      />
    </Box>
  );
};
