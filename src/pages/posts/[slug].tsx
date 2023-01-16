import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import markdownToTxt from 'markdown-to-txt';

import { Analytics } from '$components/analytics';
import { findPosts } from '$http/find-posts';
import { PostTemplate, PostTemplateProps } from '$templates/post-template';

import SEO from 'next-seo.config';
import { getPost } from '$http/get-post';

export default function Post(props: PostTemplateProps) {
  return (
    <>
      <NextSeo
        title={`${props.post.title} | Silvano Marques`}
        description={markdownToTxt(props.post.content.slice(0, 100) + '...')}
        canonical={SEO.openGraph.url}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <Analytics />

      <PostTemplate {...props} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await findPosts({ page: 1 });

  const paths = posts.map(({ slug }) => ({
    params: { slug: String(slug) },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<PostTemplateProps> = async ({
  params,
}) => {
  const { slug } = params as { slug: string };

  try {
    const post = await getPost(slug);

    return {
      props: { post: { ...post, slug } },
      revalidate: 60 * 60 * 24 * 7, // one week
    };
  } catch (e) {
    return { notFound: true };
  }
};
