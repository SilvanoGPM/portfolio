import { useQuery, UseQueryResult } from 'react-query';

import { findPosts, FindPostsParams, RawPost } from '$http/find-posts';
import { dateFormat } from '$http/date-formatt';

interface Post {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
}

function mapData(data?: RawPost[]) {
  return (
    data
      ?.filter((post) => post.parent_id === null)
      .map<Post>((post) => ({
        ...post,
        title: String(post.title),
        slug: String(post.slug),
        createdAt: dateFormat(new Date(post.created_at)),
      })) || []
  );
}

export function useFindPosts(params: FindPostsParams) {
  const { data: oldData, ...rest } = useQuery(
    ['posts', params],
    () => findPosts(params),
    {
      staleTime: Infinity,
    },
  );

  const data = mapData(oldData);

  return { data, ...rest } as UseQueryResult<Post[], unknown>;
}
