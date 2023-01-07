import { HomeTemplate } from '$templates/HomeTemplate';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </Head>

      <HomeTemplate />
    </>
  );
}
