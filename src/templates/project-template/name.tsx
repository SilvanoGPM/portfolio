import { Badge, Box, Center, Flex } from '@chakra-ui/react';

import { Title } from '$components/chakra/title';
import { CategoryIcon } from '$components/ui/project-card/category-icon';

import { Project } from '.';

interface NameProps {
  project: Project;
}

export function Name({ project }: NameProps) {
  console.log(project);

  return (
    <Flex align="center" gap="1rem">
      <Box mb="-4">
        <Title underlineWidth="50%">{project.name}</Title>
      </Box>

      <Badge>
        <Center>
          <CategoryIcon category={project.category} />
          <Box ml="2">{project.category}</Box>
        </Center>
      </Badge>
    </Flex>
  );
}
