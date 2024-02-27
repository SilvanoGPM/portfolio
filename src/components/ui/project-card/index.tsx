import {
  Button,
  Flex,
  Heading,
  Icon,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';

import { Link } from '@chakra-ui/next-js';
import { AiOutlineLink } from 'react-icons/ai';

import { Image } from '$components/chakra/image';
import { SlideFade } from '$components/ui/animations/slide-fade';
import { glassmorphismContainer } from '$styles/tokens';

import { Fade } from 'react-awesome-reveal';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { Links } from './links';
import { TechList } from './tech-list';

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
      pos="relative"
      zIndex="1"
      textAlign="start"
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
        overflow="hidden"
      >
        <SlideFade direction="right">
          <Flex
            align="center"
            transition="0.2s ease-in-out"
            _groupHover={{ color: 'brand.500' }}
          >
            <Link href={href}>
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
            </Link>

            <Icon as={AiOutlineLink} />
          </Flex>
        </SlideFade>

        <SlideFade direction="right" delay={200}>
          <Text>{project.description}</Text>
        </SlideFade>

        <Spacer />

        <TechList project={project} />

        <Fade delay={500} cascade triggerOnce style={{ width: '100%' }}>
          <Button
            as={Link}
            href={href}
            rightIcon={<Icon as={FaRegArrowAltCircleRight} />}
            w="full"
          >
            Ver projeto
          </Button>

          <Links repository={project.repository} url={project.url} />
        </Fade>
      </VStack>
    </Flex>
  );
}
