import { Badge, Wrap, WrapItem } from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';

import { Project } from '.';
import { CategoryBadge } from './category-badge';

interface TechListProps {
  project: Project;
}

export function TechList({ project }: TechListProps) {
  return (
    <Wrap as={Fade} gap="2">
      <CategoryBadge category={project.category} as="li" />

      {project.techs.map((tech, index) => (
        <WrapItem key={tech}>
          <Fade cascade triggerOnce delay={(index + 1) * 50}>
            <Badge>{tech}</Badge>
          </Fade>
        </WrapItem>
      ))}
    </Wrap>
  );
}
