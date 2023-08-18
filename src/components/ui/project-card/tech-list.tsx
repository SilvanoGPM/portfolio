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
      <Fade cascade triggerOnce>
        <CategoryBadge category={project.category} />

        {project.techs.map((tech) => (
          <WrapItem key={tech}>
            <Badge>{tech}</Badge>
          </WrapItem>
        ))}
      </Fade>
    </Wrap>
  );
}
