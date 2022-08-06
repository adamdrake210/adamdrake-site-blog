import React from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useColorMode } from '@chakra-ui/react';

import { useThemeColors } from 'hooks/useThemeColors';

export const SelectColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { color } = useThemeColors();

  return (
    <Button variant="link" onClick={toggleColorMode}>
      {colorMode === 'light' ? (
        <MoonIcon color={color} />
      ) : (
        <SunIcon color={color} />
      )}
    </Button>
  );
};
