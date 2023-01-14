import { Box, Flex } from '@chakra-ui/react';

import { TechList } from '$components/ui/tech-list';
import { Links } from '$components/ui/project-card/links';
import { glassmorphismContainer } from '$styles/tokens';

import { Project } from '.';
import { Markdown } from '$components/ui/markdown';

interface ContentProps {
  project: Project;
}

export function Content({ project }: ContentProps) {
  return (
    <Box
      p={['4', '8']}
      sx={glassmorphismContainer({ bg: 'backgroundAlpha.100' })}
    >
      <Markdown>{project.description}</Markdown>

      <Flex w="full" mt="8" direction="column" justify="center" align="start">
        <Flex fontSize="6xl" align="center">
          <Links url={project.url} repository={project.repository} />
        </Flex>

        <TechList techs={project.techs} />
      </Flex>
    </Box>
  );
}
