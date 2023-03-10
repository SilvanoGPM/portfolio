import { VStack } from '@chakra-ui/react';

import { DefaultLayout } from '$components/layout/default-layout';

import { Welcome } from './welcome';
import { Technologies } from './technologies';
import { AboutMe } from './about-me';
import { Services } from './services';
import { Projects, Project } from './projects';
import { Contact } from './contact';

interface InfoProps {
  aboutMe: string;
  techs: string[];
  api: string;
  web: string;
  other: string;
}

export interface HomeTemplateProps {
  info: InfoProps;
  projects: Project[];
}

export function HomeTemplate({ projects, info }: HomeTemplateProps) {
  return (
    <DefaultLayout>
      <VStack align="start" spacing="16" as="main">
        <Welcome />
        <AboutMe text={info.aboutMe} />
        <Technologies technologies={info.techs} />
        <Services {...info} />
        <Projects projects={projects} />
        <Contact />
      </VStack>
    </DefaultLayout>
  );
}
