import { VStack } from '@chakra-ui/react';

import { DefaultLayout } from '$components/layout/default-layout';
import { BackToTop } from '$components/ui/back-to-top';

import { Welcome } from './welcome';
import { Technologies } from './technologies';
import { Services } from './services';
import { Projects } from './projects';
import { Contact } from './contact';
import { AboutMe } from './about-me';
import type { Project } from './projects';

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
        <Projects projects={projects} />
        <Technologies technologies={info.techs} />
        <AboutMe text={info.aboutMe} />
        <Services {...info} />
        <Contact />
      </VStack>

      <BackToTop />
    </DefaultLayout>
  );
}
