import { Badge, Box, Center, Flex } from '@chakra-ui/react';

import { Project } from '.';
import { CategoryIcon } from './category-icon';

interface TechListProps {
  project: Project;
}

export function TechList({ project }: TechListProps) {
  return (
    <Flex wrap="wrap" gap="2">
      <Badge>
        <Center>
          <CategoryIcon category={project.category} />
          <Box ml="2">{project.category}</Box>
        </Center>
      </Badge>

      {project.techs.map((tech) => (
        <Badge key={tech}>{tech}</Badge>
      ))}
    </Flex>
  );
}
