import { Html, Head, Main, NextScript } from 'next/document';

import { SplashScreen } from '$components/ui/splash-screen';
import { ColorModeScript } from '@chakra-ui/react';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="manifest" href="/manifest.json" />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <meta
          name="description"
          content="Meu portfolio com projetos e posts realizados por mim"
        />
        <meta name="theme-color" content="#b33939" />
      </Head>

      <body style={{ overflow: 'hidden' }}>
        <ColorModeScript initialColorMode="light" />
        <SplashScreen />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
