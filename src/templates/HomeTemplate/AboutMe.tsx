import { Flex, Image, Text } from '@chakra-ui/react';

import { HighlightText } from '$components/chakra/HighlightText';
import { Section } from '$components/ui/Section';
import { ABOUT_ME } from '$data/sections';

export function AboutMe() {
  return (
    <Section title="Sobre mim" dataScroll={ABOUT_ME}>
      <Flex wrap="wrap">
        <Text maxW="500px" fontSize="xl" textAlign="justify">
          Me chamo <HighlightText>Silvano Marques</HighlightText> e atualmente
          estou localizado no estado de Pernambuco. Comecei a estudar
          programação com 14 anos e desde não parei, meu foco é em
          desenvolvimento web, porém já explorei algumas outras áreas, como
          mobile, games e arduino. Estou no último ano do meu processo de
          formação para{' '}
          <HighlightText>Técnico em Desenvolvimento de Sistemas</HighlightText>.
        </Text>

        <Image
          src="/me.png"
          mt={{ base: '0', lg: '-32' }}
          mx="auto"
          objectFit="contain"
        />
      </Flex>
    </Section>
  );
}
