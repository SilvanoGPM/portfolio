import { POSTS_PER_PAGE } from '$shared/pagination';

import { formatDate } from '$utils/date-format';
import markdownToTxt from 'markdown-to-txt';

import { getPost } from './get-post';

interface Post {
  id: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
}

interface RawPost {
  id: string;
  parent_id: string | null;
  title: string | null;
  slug: string;
  created_at: string;
}

export interface FindPostsParams {
  page: number;
  strategy?: 'new' | 'old' | 'relevant';
  size?: number;
}

function mapData(data?: RawPost[]) {
  return (
    data
      ?.filter((post) => post.parent_id === null)
      .map<Promise<Post>>(async (post) => {
        const foundPost = await getPost(post.slug);

        const description =
          markdownToTxt(String(foundPost.content)).slice(0, 190) +
          '... (clique no título para continuar lendo.)';

        return {
          ...post,
          title: String(post.title),
          description,
          slug: String(post.slug),
          createdAt: formatDate(new Date(post.created_at)),
        };
      }) || []
  );
}

export async function findPosts({
  page,
  strategy = 'new',
  size = POSTS_PER_PAGE,
}: FindPostsParams) {
  const baseURL = 'https://www.tabnews.com.br/api/v1';
  const user = 'silvanomarques';

  const url = `${baseURL}/contents/${user}?page=${page}&per_page=${size}&strategy=${strategy}`;

  const response = await fetch(url);
  const data = await response.json();

  return Promise.all(mapData(data));
}
