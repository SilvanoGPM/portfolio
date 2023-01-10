import { HStack, Tooltip } from '@chakra-ui/react';

import { Tech } from '$components/ui/tech';

import { Project } from '.';
import { Category } from './category';

interface TechListProps {
  project: Project;
}

export function TechList({ project }: TechListProps) {
  return (
    <HStack>
      <Category category={project.category} />

      {project.techs.map((tech) => (
        <Tooltip key={tech} label={tech}>
          <Tech name={tech} fontSize="2xl" />
        </Tooltip>
      ))}
    </HStack>
  );
}
