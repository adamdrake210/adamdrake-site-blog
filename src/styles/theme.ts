import {
  extendTheme,
  theme as chakraTheme,
  ThemeConfig,
} from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const theme = extendTheme({
  ...chakraTheme,
  styles: {
    global: {
      html: {
        fontSize: '110%',
      },
      '#__next': {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      },
    },
  },
  fonts: {
    heading: '"Eczar", sans-serif',
    body: '"Raleway", sans-serif',
    mono: 'Menlo, monospace',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  config,
});

export default theme;

export const darkColorBg = 'blue.900';
export const darkColorText = 'gray.50';

export const lightColorBg = 'purple.100';
export const lightColorText = 'gray.600';
