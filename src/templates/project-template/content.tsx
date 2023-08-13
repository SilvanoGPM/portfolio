import { Box } from '@chakra-ui/react';

import { TechList } from '$components/ui/tech-list';
import { Links } from '$components/ui/project-card/links';
import { Markdown } from '$components/ui/markdown';
import { Comments } from '$components/ui/comments';

import { Project } from '.';
import { Title } from '$components/chakra/title';

interface ContentProps {
  project: Project;
}

export function Content({ project }: ContentProps) {
  return (
    <Box mt="4">
      <Title as="h2" fontSize="2xl" underlineWidth="35px">
        Links
      </Title>

      <Links url={project.url} repository={project.repository} />

      <Box mt="8">
        <Title as="h2" fontSize="2xl" underlineWidth="100px">
          Descrição
        </Title>

        <Markdown textAlign="justify">{project.description}</Markdown>
      </Box>

      <Box mt="8">
        <Title as="h2" fontSize="2xl" underlineWidth="100px">
          Tecnologias
        </Title>

        <TechList techs={project.techs} mb="8" />
      </Box>

      <Box
        mt="8"
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
