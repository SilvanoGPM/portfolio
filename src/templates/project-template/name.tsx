import { Box, Flex } from '@chakra-ui/react';

import { Title } from '$components/chakra/title';
import { Category } from '$components/ui/project-card/category';

import { Project } from '.';

interface NameProps {
  project: Project;
}

export function Name({ project }: NameProps) {
  return (
    <Flex align="center" gap="1rem">
      <Box mb="-4">
        <Title underlineWidth="50%">{project.name}</Title>
      </Box>

      <Category category={project.category} />
    </Flex>
  );
}
