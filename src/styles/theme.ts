import { createTheme, MantineColorsTuple } from '@mantine/core';

const myColor: MantineColorsTuple = [
  '#fbf4ee',
  '#ede8e2',
  '#d6cec5',
  '#c1b3a4',
  '#ae9d89',
  '#a28f77',
  '#9e876c',
  '#8a745a',
  '#7b674e',
  '#6c573e',
];

export const theme = createTheme({
  colors: {
    myColor,
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
  fontFamily: "'Lora', serif",
  headings: {
    // eslint-disable-next-line quotes
    fontFamily: "'Red Hat Display', serif",
    fontWeight: '200',
    sizes: {
      h1: { fontSize: '48px', lineHeight: '1.5' },
      h2: { fontSize: '36px', lineHeight: '1.5' },
      h3: { fontSize: '30px', lineHeight: '1.5' },
    },
  },

  other: (theme: any) => ({
    body: {
      color: theme.colors.gray[5],
    },
    a: {
      color: theme.colors.gray[7],
      '&:hover': {
        color: theme.colors.gray[5],
      },
    },
    li: {
      color: theme.colors.gray[7],
    },
  }),
});
