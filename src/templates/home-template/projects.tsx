import { Link } from '@chakra-ui/next-js';
import { Button, Icon, VStack } from '@chakra-ui/react';

import { Section } from '$components/layout/section';
import { ProjectCard } from '$components/ui/project-card';
import { PROJECTS } from '$shared/sections';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

export type Category = 'web' | 'mobile' | 'api' | 'other';

export interface Project {
  slug: string;
  name: string;
  description: string;
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
    <Section
      title="Projetos"
      dataScroll={PROJECTS}
      scrollMarginTop="120px"
      textAlign="center"
      align="center"
    >
      <VStack spacing="8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </VStack>

      <Button
        as={Link}
        href="/projects"
        variant="outline"
        mt="8"
        color="white"
        rightIcon={<Icon as={FaRegArrowAltCircleRight} />}
      >
        Ver todos os projetos
      </Button>
    </Section>
  );
}
