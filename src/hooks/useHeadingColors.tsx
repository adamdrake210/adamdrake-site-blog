import { useColorModeValue } from '@chakra-ui/react';
import { darkHeadingColor, lightHeadingColor } from 'styles/theme';

export const useHeadingColors = () => {
  // Colors for light and dark mode
  const headingColor = useColorModeValue(lightHeadingColor, darkHeadingColor);
  return headingColor;
};
