import { formatDate } from '$utils/date-format';

interface Post {
  title: string;
  content: string;
  createdAt: string;
  tabcoins: number;
}

export async function getPost(slug: string): Promise<Post> {
  const baseURL = 'https://www.tabnews.com.br/api/v1';
  const user = 'silvanomarques';

  const url = `${baseURL}/contents/${user}/${slug}`;

  const response = await fetch(url);
  const data = await response.json();

  return {
    title: data.title,
    content: data.body,
    tabcoins: data.tabcoins,
    createdAt: formatDate(new Date(data.created_at), 'medium'),
  };
}
