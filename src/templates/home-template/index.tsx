import { VStack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import { DefaultLayout } from '$components/layout/default-layout';
import { BackToTop } from '$components/ui/back-to-top';

import { Welcome } from './welcome';
import { AboutMe } from './about-me';
import type { Project } from './projects';

const Technologies = dynamic(
  () => import('./technologies').then((mod) => mod.Technologies),
  {
    ssr: false,
  },
);

const Services = dynamic(
  () => import('./services').then((mod) => mod.Services),
  {
    ssr: false,
  },
);

const Projects = dynamic(
  () => import('./projects').then((mod) => mod.Projects),
  {
    ssr: false,
  },
);

const Contact = dynamic(() => import('./contact').then((mod) => mod.Contact), {
  ssr: false,
});

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
        <Projects projects={projects} />
        <Services {...info} />
        <Contact />
      </VStack>

      <BackToTop />
    </DefaultLayout>
  );
}
