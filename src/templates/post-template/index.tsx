import { Box, Text } from '@chakra-ui/react';

import { ExternalLink } from '$components/chakra/external-link';
import { Title } from '$components/chakra/title';
import { DefaultLayout } from '$components/layout/default-layout';
import { Markdown } from '$components/ui/markdown';
import { HighlightText } from '$components/chakra/highlight-text';

interface Post {
  slug: string;
  title: string;
  content: string;
  createdAt: string;
  tabcoins: number;
}

export interface PostTemplateProps {
  post: Post;
}

export function PostTemplate({ post }: PostTemplateProps) {
  const href = `https://www.tabnews.com.br/silvanomarques/${post.slug}`;

  const maxW = ['300px', '500px', '600px', '850px'];

  return (
    <DefaultLayout>
      <Box as="main" mt={{ base: '16', lg: '8' }}>
        <Box mb="2" maxW={maxW}>
          <Text>
            Powered by{' '}
            <ExternalLink href="https://www.tabnews.com.br/">
              {' '}
              <HighlightText>TabNews</HighlightText>
            </ExternalLink>
            .
          </Text>
        </Box>

        <ExternalLink
          href={href}
          display="table"
          animated={false}
          mb="8"
          maxW={maxW}
        >
          <Title underlineHeight="0" as="h1">
            {post.title}
          </Title>
        </ExternalLink>

        <Markdown as="article" textAlign="justify">
          {post.content}
        </Markdown>
      </Box>
    </DefaultLayout>
  );
}
