import { useState } from 'react';
import { VStack } from '@chakra-ui/react';

import { SubTitle } from '$components/chakra/sub-title';
import { DefaultLayout } from '$components/layout/default-layout';
import { ProjectCard } from '$components/ui/project-card';
import { Pagination } from '$components/ui/pagination';
import { PROJECTS_PER_PAGE } from '$shared/pagination';

import { FilterOptions } from './filter-options';
import { Empty } from './empty';
import { useFindProjects } from './use-find-projects';
import { Loading } from './loading';
import { Error } from './error';

export type Category = 'all' | 'web' | 'api' | 'mobile' | 'other';

export function ProjectsTemplate() {
  const [category, setCategory] = useState<Category>('all');
  const [page, setPage] = useState(1);

  const projectsQuery = useFindProjects({ page, category });

  const hasData = (projectsQuery.data?.length || 0) > 0;

  function handleChangeCategory(category: Category) {
    setPage(1);
    setCategory(category);
  }

  return (
    <DefaultLayout>
      <SubTitle as="h1" fontSize="4xl">
        Projetos
      </SubTitle>

      <FilterOptions value={category} setValue={handleChangeCategory} />

      {projectsQuery.isLoading ? (
        <Loading />
      ) : projectsQuery.isError ? (
        <Error />
      ) : (
        <>
          {hasData ? (
            <VStack spacing="8" mt="8">
              {projectsQuery.data?.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}

              <Pagination
                currentPage={page}
                onPageChange={setPage}
                totalCountOfRegisters={projectsQuery.total}
                registersPerPage={PROJECTS_PER_PAGE}
                showResume={false}
              />
            </VStack>
          ) : (
            <Empty />
          )}
        </>
      )}
    </DefaultLayout>
  );
}
