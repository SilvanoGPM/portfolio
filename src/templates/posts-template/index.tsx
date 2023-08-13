import { Wrap, WrapItem } from '@chakra-ui/react';

import { DefaultLayout } from '$components/layout/default-layout';
import { Title } from '$components/chakra/title';

import { Card, Post } from './card';

export interface PostsTemplateProps {
  posts: Post[];
}

export function PostsTemplate({ posts }: PostsTemplateProps) {
  return (
    <DefaultLayout>
      <Title as="h1" fontSize="4xl">
        Postagens
      </Title>

      <Wrap spacing="4" mt="8" align="start">
        {posts.map((post) => (
          <WrapItem key={post.slug}>
            <Card post={post} />
          </WrapItem>
        ))}
      </Wrap>
    </DefaultLayout>
  );
}
