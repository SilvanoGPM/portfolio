import { DefaultLayout } from '$components/layout/DefaultLayout';
import { VStack } from '@chakra-ui/react';

import { Welcome } from './Welcome';
import { Technologies, TechnologiesProps } from './Technologies';
import { AboutMe } from './AboutMe';
import { Services } from './Services';
import { Projects, ProjectsProps } from './Projects';

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
