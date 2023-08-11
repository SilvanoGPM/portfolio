import { useQuery, UseQueryResult } from 'react-query';

import { FindProjectsParams, findProjects } from '$http/find-project';
import { formatProject } from '$utils/format-project';

type Category = 'web' | 'api' | 'mobile' | 'other';

interface Project {
  slug: string;
  name: string;
  description: string;
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

  const data = oldData?.allProjects.map(formatProject);

  return { data, total, ...rest } as UseQueryResult<Project[], unknown> & {
    total: number;
  };
}
