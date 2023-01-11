import Head from 'next/head';

import { PostsTemplate } from '$templates/posts-template';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Minhas postagens | Silvano Marques</title>
      </Head>

      <PostsTemplate />
    </>
  );
}
