import { ChakraProvider } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import type { AppProps } from 'next/app';
import MDXComponents from 'components/mdx/MDXComponents';
import theme from 'styles/theme';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={MDXComponents}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </MDXProvider>
  );
}

export default MyApp;
