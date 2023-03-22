import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colors: {
    secondary: [
      '#e4f0f7',
      '#d6e8f3',
      '#bbd9ec',
      '#add1e8',
      '#a0cae4',
      '#85bbdc',
      '#77b3d8',
      '#5f8fad',
      '#476b82',
      '#3c5a6c',
    ],
    dark: [
      '#b3bcc5',
      '#99a5b1',
      '#808f9e',
      '#4d6277',
      '#334b63',
      '#1a3550',
      '#001e3c',
      '#001b36',
      '#001830',
      '#001224',
    ],
  },
  primaryShade: 4,
  // eslint-disable-next-line quotes
  fontFamily: "'Source Serif Pro', serif",
  headings: {
    // eslint-disable-next-line quotes
    fontFamily: "'Montserrat', serif",
    fontWeight: 200,
    sizes: {
      h1: { fontSize: '48px', lineHeight: 1.5 },
      h2: { fontSize: '36px', lineHeight: 1.5 },
      h3: { fontSize: '30px', lineHeight: 1.5 },
    },
  },

  globalStyles: theme => ({
    html: {
      height: '100%',
    },
    '#__next': {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      height: '100%',
    },
    body: {
      ...theme.fn.fontStyles(),
      height: '100%',
      fontWeight: 200,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.gray[0]
          : theme.colors.gray[7],
    },
    a: {
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.gray[0]
          : theme.colors.gray[7],
      '&:hover': {
        color:
          theme.colorScheme === 'dark'
            ? theme.colors.gray[4]
            : theme.colors.gray[5],
      },
    },
  }),
};
