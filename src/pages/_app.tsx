import { ChakraProvider } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';

import type { AppProps } from 'next/app';
import MDXComponents from 'components/mdx/MDXComponents';
import theme from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={MDXComponents}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </MDXProvider>
  );
}

export default MyApp;
