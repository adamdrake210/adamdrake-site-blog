import { useColorModeValue } from '@chakra-ui/react';
import {
  darkColorBg,
  darkColorText,
  darkHeadingColor,
  lightColorBg,
  lightColorText,
  lightHeadingColor,
} from 'styles/theme';

export const useThemeColors = () => {
  // Colors for light and dark mode
  const headingColor = useColorModeValue(lightHeadingColor, darkHeadingColor);
  const bgColor = useColorModeValue(lightColorBg, darkColorBg);
  const color = useColorModeValue(lightColorText, darkColorText);
  return {
    headingColor,
    bgColor,
    color,
  };
};
