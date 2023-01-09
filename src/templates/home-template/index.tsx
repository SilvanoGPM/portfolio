import { VStack } from '@chakra-ui/react';

import { DefaultLayout } from '$components/layout/default-layout';

import { Welcome } from './welcome';
import { Technologies, TechnologiesProps } from './technologies';
import { AboutMe } from './about-me';
import { Services } from './services';
import { Projects, ProjectsProps } from './projects';

export interface HomeTemplateProps {
  technologies: TechnologiesProps;
  projects: ProjectsProps;
}

export function HomeTemplate({ technologies, projects }: HomeTemplateProps) {
  return (
    <DefaultLayout>
      <VStack align="start" spacing="16" as="main">
        <Welcome />
        <AboutMe />
        <Technologies {...technologies} />
        <Services />
        <Projects {...projects} />
      </VStack>
    </DefaultLayout>
  );
}
