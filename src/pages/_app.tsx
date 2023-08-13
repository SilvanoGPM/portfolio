import { ChakraProvider } from '@chakra-ui/react';
import { Titillium_Web } from 'next/font/google';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import NextNProgress from 'nextjs-progressbar';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { DefaultSeo } from 'next-seo';
import { Analytics } from '@vercel/analytics/react';

import { useUIStore } from '$stores/ui';
import { theme } from '$styles/theme';
import { useSplashScreen } from '$hooks/use-splash-screen';
import { queryClient } from '$services/query-client';
import { useScrollLock } from '$hooks/use-scroll-lock';

import SEO from 'next-seo.config';

import '$styles/css/devicon/style.min.css';

const tintilliumWeb = Titillium_Web({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
});

function App({ Component, pageProps }: AppProps) {
  useSplashScreen('hide');

  const { unlockScroll } = useScrollLock();

  const { closeSidebar, setHeaderInTop } = useUIStore();

  Router.events.on('routeChangeComplete', () => {
    unlockScroll();
    setHeaderInTop(true);
    closeSidebar();
  });

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${tintilliumWeb.style.fontFamily};
        }
      `}</style>

      <DefaultSeo {...SEO} />

      <NextNProgress
        color={theme.colors.brand['500']}
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
      />

      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <Analytics />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
