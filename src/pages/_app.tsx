import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

import { theme } from '$styles/themes';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
