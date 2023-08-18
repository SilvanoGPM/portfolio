import { Text, Icon } from '@chakra-ui/react';
import { AiOutlineRocket } from 'react-icons/ai';

import { Section } from '$components/layout/section';
import { ScrollButton } from '$components/ui/scroll-button';
import { PROJECTS } from '$shared/sections';
import { TechList } from '$components/ui/tech-list';
import { SlideFade } from '$components/ui/animations/slide-fade';

export interface TechnologiesProps {
  technologies: string[];
}

export function Technologies({ technologies }: TechnologiesProps) {
  return (
    <Section title="Tecnologias" textAlign="center" align="center">
      <TechList techs={technologies} w="full" justify="center" />

      <SlideFade
        delay={210 * technologies.length}
        direction="up"
        cascade
        damping={0.1}
      >
        <Text mt="10" maxW="400px">
          Você pode ver os projetos que eu desenvolvi utilizando algumas dessas
          tecnologias.
        </Text>

        <ScrollButton
          dataScroll={PROJECTS}
          rightIcon={<Icon as={AiOutlineRocket} />}
          maxW="400px"
          w="full"
        >
          Ver projetos
        </ScrollButton>
      </SlideFade>
    </Section>
  );
}
