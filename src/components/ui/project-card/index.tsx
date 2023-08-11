import { Flex, Heading, Icon, Spacer, Text, VStack } from '@chakra-ui/react';

import { glassmorphismContainer } from '$styles/tokens';
import { Link } from '$components/chakra/internal-link';

import { TechList } from './tech-list';
import { Links } from './links';
import { Image } from '$components/chakra/image';
import { AiOutlineLink } from 'react-icons/ai';

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

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const href = `/projects/${project.slug}`;

  return (
    <Flex
      role="group"
      as={Link}
      href={href}
      animated={false}
      aria-label="Saiba mais sobre este projeto"
      direction={{ base: 'column', lg: 'row' }}
      w="full"
      p="4"
      borderWidth="1px"
      borderColor="brand.alpha.100"
      transition="0.2s ease-in-out"
      sx={glassmorphismContainer()}
      _hover={{
        shadow: 'red',
        textDecor: 'none',
      }}
    >
      <Image
        src={String(project.thumbnail)}
        alt={project.name}
        w={{ base: '100%', lg: '50%' }}
        h={{ base: '250px', lg: 'auto' }}
        mb={{ base: '4', lg: '0' }}
        objectFit="cover"
        objectPosition="center"
        rounded="lg"
        overflow="hidden"
      />

      <VStack
        w={{ base: 'full', lg: '50%' }}
        h={{ base: '50%', lg: 'full' }}
        ml={{ base: '0', lg: '4' }}
        align="start"
      >
        <Flex
          align="center"
          transition="0.2s ease-in-out"
          _groupHover={{ color: 'brand.500' }}
        >
          <Heading
            as="h3"
            color="white"
            fontSize={{ base: 'xl', md: '2xl' }}
            textTransform="uppercase"
            mr="2"
            transition="0.2s ease-in-out"
            _groupHover={{ color: 'brand.500' }}
          >
            {project.name}
          </Heading>

          <Icon as={AiOutlineLink} />
        </Flex>

        <Text>{project.description}</Text>

        <Spacer />

        <TechList project={project} />

        <Links repository={project.repository} url={project.url} />
      </VStack>
    </Flex>
  );
}
