import { ChakraProvider } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { Titillium_Web } from 'next/font/google';
import { Router } from 'next/router';
import NextNProgress from 'nextjs-progressbar';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { useScrollLock } from '$hooks/use-scroll-lock';
import { useSplashScreen } from '$hooks/use-splash-screen';
import { queryClient } from '$services/query-client';
import { useUIStore } from '$stores/ui';
import { getThemeValues, theme } from '$styles/theme';

import SEO from 'next-seo.config';

import { usePreferencesStore } from '$stores/preferences';
import '$styles/css/devicon/style.min.css';
import { useMemo } from 'react';

const tintilliumWeb = Titillium_Web({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
});

function App({ Component, pageProps }: AppProps) {
  const { preferences } = usePreferencesStore();

  useSplashScreen('hide');

  const { unlockScroll } = useScrollLock();

  const { closeSidebar, setHeaderInTop } = useUIStore();

  Router.events.on('routeChangeComplete', () => {
    unlockScroll();
    setHeaderInTop(true);
    closeSidebar();
  });

  const selectedTheme = useMemo(() => {
    const { colors, styles } = getThemeValues(preferences.color);

    return {
      ...theme,

      colors: {
        ...theme.colors,
        ...colors,
      },

      styles: {
        ...theme.styles,
        ...styles,
      },
    };
  }, [preferences.color]);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${tintilliumWeb.style.fontFamily};
        }
      `}</style>

      <DefaultSeo {...SEO} />

      <NextNProgress
        color={selectedTheme.colors.brand['500']}
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
      />

      <ChakraProvider theme={selectedTheme}>
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
