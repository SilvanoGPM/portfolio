import Head from 'next/head';

import { PostsTemplate, PostsTemplateProps } from '$templates/posts-template';
import { Analytics } from '$components/analytics';
import { GetStaticProps } from 'next';
import { findPosts } from '$http/find-posts';

export default function Posts(props: PostsTemplateProps) {
  return (
    <>
      <Head>
        <title>Minhas postagens | Silvano Marques</title>
      </Head>

      <Analytics />

      <PostsTemplate {...props} />
    </>
  );
}

export const getStaticProps: GetStaticProps<PostsTemplateProps> = async () => {
  const posts = await findPosts({
    page: 1,
    size: 100,
    strategy: 'new',
  });

  return {
    revalidate: 60 * 60 * 24, // one day
    props: {
      posts,
    },
  };
};
