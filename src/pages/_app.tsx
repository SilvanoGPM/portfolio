import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { theme } from '$styles/themes';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Silvano Marques | Programador Web</title>
      </Head>

      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App;
