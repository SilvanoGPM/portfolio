import { Text } from '@chakra-ui/react';

import { Section } from '$components/ui/section';
import { ScrollButton } from '$components/ui/scroll-button';
import { PROJECTS } from '$shared/sections';
import { TechList } from '$components/ui/tech-list';

export interface TechnologiesProps {
  technologies: string[];
}

export function Technologies({ technologies }: TechnologiesProps) {
  return (
    <Section title="Tecnologias" maxW="900px">
      <TechList techs={technologies} w="full" />

      <Text mt="10" maxW="400px">
        Você pode ver os projetos que eu desenvolvi utilizando algumas dessas
        tecnologias.
      </Text>

      <ScrollButton dataScroll={PROJECTS}>Ver projetos</ScrollButton>
    </Section>
  );
}
