import { Flex } from '@chakra-ui/react';

import { Section } from '$components/ui/Section';
import { TechCard } from '$components/ui/TechCard';
import { blackLogos, technologies } from '$data/technologies';

export function Technologies() {
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
    </Section>
  );
}
