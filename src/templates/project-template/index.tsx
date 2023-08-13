import { Box } from '@chakra-ui/react';

import { DefaultLayout } from '$components/layout/default-layout';

import { ProjectSlider } from './project-slider';
import { Name } from './name';
import { Content } from './content';
import { glassmorphismContainer } from '$styles/tokens';

export type Category = 'web' | 'mobile' | 'api' | 'other';

export interface Project {
  name: string;
  description: string;
  category: Category;
  url?: string | null;
  repository?: string | null;
  techs: string[];
  thumbnail?: string | null;
  images?: string[];
}

export interface ProjectTemplateProps {
  project: Project;
}

export function ProjectTemplate({ project }: ProjectTemplateProps) {
  return (
    <DefaultLayout>
      <Box
        as="main"
        mt="8"
        w="full"
        p={['4', '8']}
        sx={glassmorphismContainer()}
      >
        <Name project={project} />

        <ProjectSlider project={project} />

        <Content project={project} />
      </Box>
    </DefaultLayout>
  );
}
