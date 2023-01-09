import { HStack, Tooltip } from '@chakra-ui/react';

import { Tech } from '$components/ui/tech';

import { Project } from '..';
import { categories } from './categories';

interface TechListProps {
  project: Project;
}

export function TechList({ project }: TechListProps) {
  const category = categories[project.category];

  return (
    <HStack>
      <Tooltip label={category.text} bg={category.color}>
        <category.Icon color={category.color} fontSize="4xl" />
      </Tooltip>

      {project.techs.map((tech) => (
        <Tooltip key={tech} label={tech}>
          <Tech name={tech} fontSize="2xl" />
        </Tooltip>
      ))}
    </HStack>
  );
}
