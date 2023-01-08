import { Button, Icon, VStack } from '@chakra-ui/react';
import { AiFillEye } from 'react-icons/ai';
import NextLink from 'next/link';

import { Section } from '$components/ui/Section';
import { PROJECTS } from '$data/sections';

import { Card } from './Card';

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
            <Card key={project.slug} project={project} />
          ))}

          <Button
            rightIcon={<Icon as={AiFillEye} />}
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
