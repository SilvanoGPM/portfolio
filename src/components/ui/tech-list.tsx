import { Flex, FlexProps } from '@chakra-ui/react';

import { TechCard } from './tech-card';

const blackLogos = ['nextjs', 'github', 'express'];

interface TechListProps extends FlexProps {
  techs: string[];
}

export function TechList({ techs, ...props }: TechListProps) {
  return (
    <Flex wrap="wrap" gap="1rem" {...props}>
      {techs.map((tech) => (
        <TechCard key={tech} name={tech} colored={!blackLogos.includes(tech)} />
      ))}
    </Flex>
  );
}
