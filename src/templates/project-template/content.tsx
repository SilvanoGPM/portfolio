import { Box, Flex, Text } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';

import { TechList } from '$components/ui/tech-list';
import { Links } from '$components/ui/project-card/links';
import { glassmorphismContainer } from '$styles/tokens';

import { Project } from '.';

interface ContentProps {
  project: Project;
}

export function Content({ project }: ContentProps) {
  return (
    <Box
      p={['4', '8']}
      sx={glassmorphismContainer({ bg: 'backgroundAlpha.100' })}
    >
      <Text
        as={ReactMarkdown}
        fontSize="2xl"
        sx={{ strong: { color: 'brand.500' } }}
      >
        {project.description}
      </Text>

      <Flex w="full" mt="8" direction="column" justify="center" align="start">
        <Flex fontSize="6xl" align="center">
          <Links url={project.url} repository={project.repository} />
        </Flex>

        <TechList techs={project.techs} />
      </Flex>
    </Box>
  );
}
