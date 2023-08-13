import { Badge, Flex } from '@chakra-ui/react';

import { Project } from '.';
import { CategoryBadge } from './category-badge';

interface TechListProps {
  project: Project;
}

export function TechList({ project }: TechListProps) {
  return (
    <Flex wrap="wrap" gap="2">
      <CategoryBadge category={project.category} />

      {project.techs.map((tech) => (
        <Badge key={tech}>{tech}</Badge>
      ))}
    </Flex>
  );
}
