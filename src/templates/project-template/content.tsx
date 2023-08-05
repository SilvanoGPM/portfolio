import { Box, Flex } from '@chakra-ui/react';

import { TechList } from '$components/ui/tech-list';
import { Links } from '$components/ui/project-card/links';
import { glassmorphismContainer } from '$styles/tokens';
import { Markdown } from '$components/ui/markdown';
import { Comments } from '$components/ui/comments';

import { Project } from '.';
import { Title } from '$components/chakra/title';

interface ContentProps {
  project: Project;
}

export function Content({ project }: ContentProps) {
  return (
    <Box p={['4', '8']} sx={glassmorphismContainer()}>
      <Flex
        w="full"
        direction={{ base: 'column-reverse', md: 'row' }}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'space-between' }}
      >
        <TechList techs={project.techs} />

        <Flex fontSize="6xl" align="center">
          <Links url={project.url} repository={project.repository} />
        </Flex>
      </Flex>

      <Markdown mt="8" textAlign="justify">
        {project.description}
      </Markdown>

      <Box
        mt="16"
        sx={{
          '.utterances': {
            maxWidth: '100%',
            mx: 0,
          },
        }}
      >
        <Title as="h2" fontSize="2xl">
          Comentários
        </Title>

        <Comments />
      </Box>
    </Box>
  );
}
