import { Box, CircularProgress } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';

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

      <body>
        <Box pos="absolute" left="50%" zIndex="50">
          <CircularProgress isIndeterminate color="green.300" />
        </Box>

        <Main />
        <NextScript />
      </body>

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
    </Html>
  );
}
