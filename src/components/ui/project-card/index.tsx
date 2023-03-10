import { Box, Center, Flex, Heading, Icon } from '@chakra-ui/react';
import { AiFillEye } from 'react-icons/ai';

import { glassmorphismContainer } from '$styles/tokens';
import { Link } from '$components/chakra/internal-link';

import { TechList } from './tech-list';
import { Links } from './links';
import { Thumbnail } from './thumbnail';

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

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const href = `/projects/${project.slug}`;

  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      h={{ base: '400px', lg: '250px' }}
      w="full"
      transition="0.2s ease-in"
    >
      <Thumbnail
        href={href}
        thumbnail={project.thumbnail}
        name={project.name}
      />

      <Box
        pos="relative"
        w={{ base: 'full', lg: '40%' }}
        h={{ base: '50%', lg: 'full' }}
        px="4"
        borderRightColor={{ base: 'none', lg: 'brand.500' }}
        borderRightWidth={{ base: 'none', lg: '8px' }}
        sx={glassmorphismContainer({ bg: 'backgroundAlpha.100' })}
      >
        <Center h="full">
          <Heading
            as="h3"
            fontSize={{ base: 'xl', md: '2xl' }}
            textTransform="uppercase"
            textAlign="center"
          >
            {project.name}
          </Heading>
        </Center>

        <Box pos="absolute" left="4" bottom="4" fontSize="4xl">
          <Links repository={project.repository} url={project.url} />
        </Box>

        <Box pos="absolute" right="4" bottom="4">
          <Link
            href={href}
            animated={false}
            aria-label="Saiba mais sobre este projeto"
          >
            <Icon
              as={AiFillEye}
              fontSize="4xl"
              transition="0.2s ease-in-out"
              _hover={{ color: 'brand.500' }}
            />
          </Link>
        </Box>

        <Box pos="absolute" left="4" top="4">
          <TechList project={project} />
        </Box>
      </Box>
    </Flex>
  );
}
