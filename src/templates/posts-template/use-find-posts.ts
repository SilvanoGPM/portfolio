import { useQuery } from 'react-query';

import { findPosts, FindPostsParams } from '$http/find-posts';

export function useFindPosts(params: FindPostsParams) {
  const query = useQuery(['posts', params], () => findPosts(params), {
    staleTime: Infinity,
  });

  return query;
}
