import { Avatar, Flex, Text } from '@chakra-ui/react';

import { HighlightText } from '$components/chakra/HighlightText';
import { Section } from '$components/ui/Section';
import { ABOUT_ME } from '$data/sections';

export function AboutMe() {
  return (
    <Section title="Sobre mim" dataScroll={ABOUT_ME}>
      <Flex wrap="wrap" w="full" justify="space-between" gap="1rem">
        <Text maxW="550px" fontSize="xl" textAlign="justify">
          Me chamo <HighlightText>Silvano Marques</HighlightText> e atualmente
          estou localizado no estado de Pernambuco. Comecei a estudar
          programação com 14 anos e desde não parei, meu foco é em
          desenvolvimento web, porém já explorei algumas outras áreas, como
          mobile, games e arduino. Estou no último ano do meu processo de
          formação para{' '}
          <HighlightText>Técnico em Desenvolvimento de Sistemas</HighlightText>.
        </Text>

        <Avatar
          src="https://github.com/SilvanoGPM.png"
          filter={{
            base: 'contrast(100%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
            lg: 'contrast(128%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(120%) sepia(0%)',
          }}
          name="Silvano Marques"
          title="Silvano Marques"
          bg="background.500"
          borderColor="brand.500"
          borderWidth="2px"
          color="white"
          size="2xl"
          width="200px"
          height="200px"
          mx="auto"
          transition="0.2s ease-in-out"
          _hover={{
            filter:
              'contrast(100%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
          }}
        />
      </Flex>
    </Section>
  );
}
