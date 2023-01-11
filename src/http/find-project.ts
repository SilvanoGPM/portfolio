import { FindProjectsDocument } from '$graphql/generated';
import { request } from '$services/dato';
import { PROJECTS_PER_PAGE } from '$shared/pagination';

export interface FindProjectsParams {
  category?: 'all' | 'web' | 'api' | 'mobile' | 'other';
  page: number;
  size?: number;
}

export async function findProjects({
  category,
  page,
  size = PROJECTS_PER_PAGE,
}: FindProjectsParams) {
  const skip = (page - 1) * size;

  return request(FindProjectsDocument, {
    first: size,
    skip,
    category: category === 'all' ? undefined : category,
  });
}
