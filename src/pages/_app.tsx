import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import { Router } from 'next/router';
import { Titillium_Web } from '@next/font/google';

import { theme } from '$styles/themes';
import { useUIStore } from '$stores/ui';

const tintilliumWeb = Titillium_Web({
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
});

function App({ Component, pageProps }: AppProps) {
  const { closeSidebar } = useUIStore();

  Router.events.on('routeChangeComplete', closeSidebar);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${tintilliumWeb.style.fontFamily};
        }
      `}</style>

      <Head>
        <title>Silvano Marques | Programador Web</title>
      </Head>

      <NextNProgress
        color={theme.colors.brand['500']}
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
      />

      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App;
