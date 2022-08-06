import {
  extendTheme,
  theme as chakraTheme,
  ThemeConfig,
} from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

// Colors
export const darkColorBg = 'blue.900';
export const darkColorText = 'white';

export const lightColorBg = 'purple.100';
export const lightColorText = 'gray.600';

export const lightHeadingColor = 'cyan.700';
export const darkHeadingColor = 'cyan.600';

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
    heading: `'Amatic SC', cursive`,
    body: `'Josefin Slab', serif`,
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
