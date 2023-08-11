import { Badge, Box, Center, HStack } from '@chakra-ui/react';

import { Project } from '.';
import { CategoryIcon } from './category-icon';

interface TechListProps {
  project: Project;
}

export function TechList({ project }: TechListProps) {
  return (
    <HStack>
      <Badge>
        <Center>
          <CategoryIcon category={project.category} />
          <Box ml="2">{project.category}</Box>
        </Center>
      </Badge>

      {project.techs.map((tech) => (
        <Badge key={tech}>{tech}</Badge>
      ))}
    </HStack>
  );
}
