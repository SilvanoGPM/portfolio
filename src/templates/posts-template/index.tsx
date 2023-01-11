import { useState } from 'react';

import { DefaultLayout } from '$components/layout/default-layout';
import { Title } from '$components/chakra/title';
import { FilterOptions } from '$components/ui/filter-options';
import { DataList } from '$components/ui/data-list';

import { useFindPosts } from './use-find-posts';
import { Card } from './card';

type Strategy = 'new' | 'old' | 'relevant';

export function PostsTemplate() {
  const [strategy, setStrategy] = useState<Strategy>('new');

  const postsQuery = useFindPosts({ page: 1, strategy });

  function handleChangeStrategy(strategy: Strategy) {
    setStrategy(strategy);
  }

  return (
    <DefaultLayout>
      <Title as="h1" fontSize="4xl">
        Postagens
      </Title>

      <FilterOptions
        buttons={[
          {
            value: 'new',
            label: 'Novas',
          },
          {
            value: 'old',
            label: 'Antigas',
          },
          {
            value: 'relevant',
            label: 'Relevantes',
          },
        ]}
        value={strategy}
        setValue={handleChangeStrategy}
      />

      <DataList
        query={postsQuery}
        render={(post) => <Card key={post.slug} post={post} />}
        empty="Nenhum post foi encontrado."
        error="Aconteceu um erro ao tentar pesquisar os posts."
        align="start"
      />
    </DefaultLayout>
  );
}
