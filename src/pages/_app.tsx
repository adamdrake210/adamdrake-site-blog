import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MantineProvider } from '@mantine/core';
import { AnimatePresence } from 'framer-motion';
import Router from 'next/router';
import NProgress from 'nprogress';

import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { SleekLineCursor } from 'components/common/SleekLineCursor';
import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';
import { theme } from 'styles/theme';
import 'styles/index.css';
import { NightModeProvider } from 'context/NightModeContext';
import { logConsoleGreeting } from 'utils/consoleGreeting';

const queryClient = new QueryClient();

Router.events.on('routeChangeStart', url => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => NProgress.done());

Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    logConsoleGreeting();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider defaultColorScheme="light" theme={theme}>
        <NightModeProvider>
          {/*<SleekLineCursor trails={15} />*/}
          <AnimatePresence mode="wait">
            <Component {...pageProps} />
          </AnimatePresence>
        </NightModeProvider>
      </MantineProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
