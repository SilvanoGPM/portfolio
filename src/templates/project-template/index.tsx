import { Box } from '@chakra-ui/react';

import { DefaultLayout } from '$components/layout/default-layout';

import { Thumbnail } from './thumbnail';
import { Name } from './name';
import { Content } from './content';

export type Category = 'web' | 'mobile' | 'api' | 'other';

export interface Project {
  name: string;
  description: string;
  category: Category;
  url?: string | null;
  repository?: string | null;
  techs: string[];
  thumbnail?: string | null;
}

export interface ProjectTemplateProps {
  project: Project;
}

export function ProjectTemplate({ project }: ProjectTemplateProps) {
  return (
    <DefaultLayout>
      <Box as="main" mt="8" w="full">
        <Name project={project} />

        <Thumbnail project={project} />

        <Content project={project} />
      </Box>
    </DefaultLayout>
  );
}
