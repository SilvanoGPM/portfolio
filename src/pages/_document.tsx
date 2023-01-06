import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />

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
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
