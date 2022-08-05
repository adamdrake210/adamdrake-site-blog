import { ChakraProvider } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import MDXComponents from 'components/mdx/MDXComponents';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={MDXComponents}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </MDXProvider>
  );
}

export default MyApp;
