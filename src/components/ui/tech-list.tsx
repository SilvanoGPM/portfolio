import { FlexProps, Wrap, WrapItem } from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';

import { TechCard } from './tech-card';

const blackLogos = ['nextjs', 'github', 'express'];

interface TechListProps extends FlexProps {
  techs: string[];
}

export function TechList({ techs, ...props }: TechListProps) {
  return (
    <Wrap align="stretch" {...props}>
      {techs.map((tech, index) => (
        <WrapItem key={tech}>
          <Fade cascade triggerOnce delay={index * 200}>
            <TechCard name={tech} colored={!blackLogos.includes(tech)} />
          </Fade>
        </WrapItem>
      ))}
    </Wrap>
  );
}
