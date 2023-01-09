import { Button, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';

import { Section } from '$components/ui/section';
import { PROJECTS } from '$shared/sections';
import { ProjectCard } from '$components/ui/project-card';

export type Category = 'web' | 'mobile' | 'api' | 'other';

export interface Project {
  slug: string;
  name: string;
  category: Category;
  url?: string | null;
  repository?: string | null;
  techs: string[];
  thumbnail?: string | null;
}

export interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <div data-scroll={PROJECTS} />

      <Section title="Projetos">
        <VStack spacing="8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}

          <Button
            size="lg"
            maxW={{ base: '100%', lg: '40%' }}
            w="full"
            variant="outline"
            alignSelf="end"
            as={NextLink}
            href="/projects"
          >
            Ver todos os projetos
          </Button>
        </VStack>
      </Section>
    </>
  );
}
