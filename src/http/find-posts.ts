import { POSTS_PER_PAGE } from '$shared/pagination';

export interface RawPost {
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

  return data as RawPost[];
}
