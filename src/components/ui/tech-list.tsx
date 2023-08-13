import { FlexProps, Wrap, WrapItem } from '@chakra-ui/react';

import { TechCard } from './tech-card';

const blackLogos = ['nextjs', 'github', 'express'];

interface TechListProps extends FlexProps {
  techs: string[];
}

export function TechList({ techs, ...props }: TechListProps) {
  return (
    <Wrap align="stretch" {...props}>
      {techs.map((tech) => (
        <WrapItem key={tech}>
          <TechCard name={tech} colored={!blackLogos.includes(tech)} />
        </WrapItem>
      ))}
    </Wrap>
  );
}
