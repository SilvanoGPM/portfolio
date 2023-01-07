import { Text } from '@chakra-ui/react';

import { HighlightText } from '$components/chakra/HighlightText';
import { Section } from '$components/ui/Section';

export function AboutMe() {
  return (
    <Section title="Sobre mim">
      <Text maxW="600px" fontSize="xl" textAlign="justify">
        Me chamo <HighlightText>Silvano Marques</HighlightText> e atualmente
        estou localizado no estado de Pernambuco. Comecei a estudar programação
        com 14 anos e desde não parei, meu foco é em desenvolvimento web, porém
        já explorei algumas outras áreas, como mobile, games e arduino. Estou no
        último ano do meu processo de formação para{' '}
        <HighlightText>Técnico em Desenvolvimento de Sistemas</HighlightText>.
      </Text>
    </Section>
  );
}
