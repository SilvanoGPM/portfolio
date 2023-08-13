import { Badge, Box, Center, Flex } from '@chakra-ui/react';

import { Title } from '$components/chakra/title';
import { CategoryBadge } from '$components/ui/project-card/category-badge';

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

      <Badge>
        <Center>
          <CategoryBadge category={project.category} />
          <Box ml="2">{project.category}</Box>
        </Center>
      </Badge>
    </Flex>
  );
}
