import { Flex, Text } from '@chakra-ui/react';

import { Section } from '$components/ui/section';
import { TechCard } from '$components/ui/tech-card';
import { ScrollButton } from '$components/ui/scroll-button';
import { PROJECTS } from '$shared/sections';

export interface TechnologiesProps {
  technologies: string[];
  blackLogos: string[];
}

export function Technologies({ technologies, blackLogos }: TechnologiesProps) {
  return (
    <Section title="Tecnologias" maxW="900px">
      <Flex
        w="full"
        wrap="wrap"
        gap="1rem"
        justify={{ base: 'space-between', lg: 'start' }}
      >
        {technologies.map((technology) => (
          <TechCard
            key={technology}
            name={technology}
            colored={!blackLogos.includes(technology)}
          />
        ))}
      </Flex>

      <Text mt="10" maxW="400px">
        Você pode ver os projetos que eu realizer utilizando algumas dessas
        tecnologias.
      </Text>

      <ScrollButton dataScroll={PROJECTS}>Ver projetos</ScrollButton>
    </Section>
  );
}
