import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Text,
  Icon,
  Tooltip,
  Link,
  Image,
} from '@chakra-ui/react';

import NextLink from 'next/link';

import {
  ApiIcon,
  ChakraUiIcon,
  ExpoIcon,
  OtherIcon,
  StyledComponentsIcon,
  WebIcon,
} from '$components/chakra/Icons';

import { AiFillEye, AiFillGithub, AiOutlineGlobal } from 'react-icons/ai';

import { Project } from '.';
import { glassmorphismContainer } from '$styles/tokens';

interface CardProps {
  project: Project;
}

const categories = {
  web: {
    icon: WebIcon,
    color: 'teal.400',
    text: 'Website',
  },

  api: {
    icon: ApiIcon,
    color: 'green.400',
    text: 'API',
  },

  other: {
    icon: OtherIcon,
    color: 'purple.700',
    text: 'Software',
  },

  mobile: {
    icon: OtherIcon,
    color: 'pink.300',
    text: 'Aplicativo',
  },
};

const iconsTech = {
  chakra: { Icon: ChakraUiIcon, bg: 'teal.400', rounded: 'full' },
  expo: { Icon: ExpoIcon, color: 'currentColor' },
  'styled-components': {
    Icon: StyledComponentsIcon,
    color: 'pink.300',
    fontSize: '4xl',
  },
};

export function Card({ project }: CardProps) {
  const category = categories[project.category];
  const CategoryIcon = category.icon;

  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      h={{ base: '400px', lg: '250px' }}
      w="full"
      transition="0.2s ease-in"
    >
      <Link
        as={NextLink}
        href={`/project/${project.slug}`}
        w={{ base: 'full', lg: '60%' }}
        h={{ base: '50%', lg: 'full' }}
        overflow="hidden"
      >
        <Image
          w="full"
          h="full"
          src={String(project.thumbnail)}
          objectFit="cover"
        />
      </Link>

      <Box
        pos="relative"
        sx={glassmorphismContainer({ bg: 'backgroundAlpha.100' })}
        w={{ base: 'full', lg: '40%' }}
        h={{ base: '50%', lg: 'full' }}
        borderRightColor={{ base: 'none', lg: 'brand.500' }}
        borderRightWidth={{ base: 'none', lg: '8px' }}
      >
        <Center h="full">
          <Heading
            as="h3"
            fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
            textTransform="uppercase"
            textAlign="center"
          >
            {project.name}
          </Heading>
        </Center>

        <Box pos="absolute" left="4" bottom="4" fontSize="4xl">
          {project.repository && (
            <Link href={project.repository} target="_blank">
              <Icon as={AiFillGithub} />
            </Link>
          )}

          {project.url && (
            <Link href={project.url} target="_blank">
              <Icon as={AiOutlineGlobal} />
            </Link>
          )}
        </Box>

        <Box pos="absolute" right="4" bottom="4">
          <NextLink href={`/project/${project.slug}`}>
            <Icon
              as={AiFillEye}
              fontSize="4xl"
              transition="0.2s ease-in-out"
              _hover={{ color: 'brand.500' }}
            />
          </NextLink>
        </Box>

        <Box pos="absolute" left="4" top="4">
          <HStack>
            <Tooltip label={category.text} bg={category.color}>
              <CategoryIcon color={category.color} fontSize="4xl" />
            </Tooltip>

            {project.techs.map((tech) => {
              const isIconTech = Object.keys(iconsTech).find(
                (key) => key === tech.toLocaleLowerCase(),
              );

              if (isIconTech) {
                const { Icon: TechIcon, ...props } =
                  iconsTech[isIconTech as keyof typeof iconsTech];

                return <TechIcon key={tech} fontSize="2xl" {...props} />;
              }

              return (
                <Text key={tech} fontSize="2xl">
                  <i
                    className={`devicon-${tech.toLocaleLowerCase()}-plain colored`}
                  ></i>
                </Text>
              );
            })}
          </HStack>
        </Box>
      </Box>
    </Flex>
  );
}
