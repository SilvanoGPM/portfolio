import { useState } from 'react';

import { Title } from '$components/chakra/title';
import { DefaultLayout } from '$components/layout/default-layout';
import { ProjectCard } from '$components/ui/project-card';
import { Pagination } from '$components/ui/pagination';
import { PROJECTS_PER_PAGE } from '$shared/pagination';
import { FilterOptions } from '$components/ui/filter-options';

import { useFindProjects } from './use-find-projects';
import { DataList } from '$components/ui/data-list';

import {
  ApiIcon,
  MobileIcon,
  OtherIcon,
  WebIcon,
} from '$components/chakra/icons';

export type Category = 'all' | 'web' | 'api' | 'mobile' | 'other';

export function ProjectsTemplate() {
  const [category, setCategory] = useState<Category>('all');
  const [page, setPage] = useState(1);

  const projectsQuery = useFindProjects({ page, category });

  function handleChangeCategory(category: Category) {
    setPage(1);
    setCategory(category);
  }

  return (
    <DefaultLayout>
      <Title as="h1" fontSize="4xl">
        Projetos
      </Title>

      <FilterOptions
        buttons={[
          { value: 'all', label: 'Todos' },
          { value: 'web', label: 'Sites', icon: <WebIcon /> },
          { value: 'api', label: 'APIs', icon: <ApiIcon /> },
          { value: 'mobile', label: 'Aplicativos', icon: <MobileIcon /> },
          { value: 'other', label: 'Outros', icon: <OtherIcon /> },
        ]}
        value={category}
        setValue={handleChangeCategory}
      />

      <DataList
        query={projectsQuery}
        render={(project) => (
          <ProjectCard key={project.slug} project={project} />
        )}
        afterList={
          <Pagination
            currentPage={page}
            onPageChange={setPage}
            totalCountOfRegisters={projectsQuery.total}
            registersPerPage={PROJECTS_PER_PAGE}
            showResume={false}
          />
        }
        error="Aconteceu um erro ao tentar pesquisar os projetos."
        empty="Nenhum projeto foi encontrado."
      />
    </DefaultLayout>
  );
}
