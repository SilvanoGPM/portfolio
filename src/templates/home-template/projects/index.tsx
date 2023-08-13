import { Flex, Icon, Text, VStack } from '@chakra-ui/react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from '@chakra-ui/next-js';

import { Section } from '$components/layout/section';
import { PROJECTS } from '$shared/sections';
import { ProjectCard } from '$components/ui/project-card';

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
    <Section title="Projetos" dataScroll={PROJECTS} scrollMarginTop="120px">
      <VStack spacing="8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </VStack>

      <Link
        href="/projects"
        mt="8"
        textAlign="start"
        display="inline-block"
        color="white"
      >
        <Flex
          as={Text}
          fontSize={['xl', '2xl']}
          fontWeight="bold"
          align="center"
          gap="1"
          mr="2"
        >
          Ver todos os projetos <Icon as={AiOutlineArrowRight} />
        </Flex>
      </Link>
    </Section>
  );
}
