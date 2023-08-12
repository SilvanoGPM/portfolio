import { Center, Icon, Text, VStack } from '@chakra-ui/react';
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
    <>
      <div data-scroll={PROJECTS} />

      <Section title="Projetos">
        <VStack spacing="8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </VStack>

        <Center>
          <Link
            href="/projects"
            mt="8"
            textAlign="start"
            display="inline-block"
            color="white"
          >
            <Center fontSize={['xl', '2xl']} fontWeight="black">
              <Text mr="2">Ver todos os projetos</Text>
              <Icon as={AiOutlineArrowRight} />
            </Center>
          </Link>
        </Center>
      </Section>
    </>
  );
}
