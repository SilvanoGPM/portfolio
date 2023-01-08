import { HStack, Text, Tooltip } from '@chakra-ui/react';

import { Project } from '..';
import { iconsTech } from './iconsTech';
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

      {project.techs.map((tech) => {
        const isIconTech = Object.keys(iconsTech).find(
          (key) => key === tech.toLocaleLowerCase(),
        );

        if (isIconTech) {
          const { Icon: TechIcon, ...props } =
            iconsTech[isIconTech as keyof typeof iconsTech];

          return <TechIcon key={tech} fontSize="2xl" {...props} />;
        }

        return (
          <Text key={tech} fontSize="2xl">
            <i
              className={`devicon-${tech.toLocaleLowerCase()}-plain colored`}
            ></i>
          </Text>
        );
      })}
    </HStack>
  );
}
