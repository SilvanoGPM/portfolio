import { FindProjectsParams, findProjects } from '$http/find-project';
import { useQuery, UseQueryResult } from 'react-query';

type Category = 'web' | 'api' | 'mobile' | 'other';

interface Project {
  slug: string;
  name: string;
  category: Category;
  url?: string | null;
  repository?: string | null;
  techs: string[];
  thumbnail?: string | null;
}

export function useFindProjects(params: FindProjectsParams) {
  const { data: oldData, ...rest } = useQuery(
    ['projects', params],
    () => findProjects(params),
    {
      staleTime: Infinity,
    },
  );

  const total = oldData?._allProjectsMeta.count || 0;

  const data = oldData?.allProjects.map((project) => ({
    ...project,
    slug: String(project.slug),
    name: String(project.name),
    category: project.category as Category,
    techs: (project.techs as string[]) || [],
    thumbnail: project.thumbnail ? String(project.thumbnail?.url) : null,
  }));

  return { data, total, ...rest } as UseQueryResult<Project[], unknown> & {
    total: number;
  };
}
