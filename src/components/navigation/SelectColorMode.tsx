import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, useColorMode } from '@chakra-ui/react';

import { useThemeColors } from 'hooks/useThemeColors';

export const SelectColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { color } = useThemeColors();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Box px={4} _hover={{ cursor: 'pointer' }}>
      {colorMode === 'light' ? (
        <MoonIcon onClick={toggleColorMode} color={color} />
      ) : (
        <SunIcon onClick={toggleColorMode} color={color} />
      )}
    </Box>
  );
};
