import Head from 'next/head';

import { PostsTemplate } from '$templates/posts-template';
import { Analytics } from '$components/analytics';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Minhas postagens | Silvano Marques</title>
      </Head>

      <Analytics />

      <PostsTemplate />
    </>
  );
}
