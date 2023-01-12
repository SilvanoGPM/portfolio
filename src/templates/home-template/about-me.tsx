import { Flex, Text, VStack } from '@chakra-ui/react';

import { HighlightText } from '$components/chakra/highlight-text';
import { Section } from '$components/ui/section';
import { ABOUT_ME, CONTACT } from '$shared/sections';
import { getMyAge } from '$utils/get-my-age';
import { ScrollButton } from '$components/ui/scroll-button';
import { Image } from '$components/chakra/image';

import meImg from '$assets/me.png';

export function AboutMe() {
  const age = getMyAge();

  return (
    <Section title="Sobre mim" dataScroll={ABOUT_ME}>
      <Flex
        wrap="wrap"
        w="full"
        align="center"
        justify="space-between"
        gap="1rem"
      >
        <VStack maxW="550px" fontSize="xl" textAlign="justify">
          <Text>
            Olá, me chamo <HighlightText>Silvano Marques</HighlightText>, sou um
            jovem de {age} anos e estou no último ano para me formar como{' '}
            <HighlightText>
              Técnico em desenvolvimento de sistemas
            </HighlightText>
            .
          </Text>

          <Text>
            Desde os 14 anos, tenho dedicado meu tempo e esforços para aprender
            e me tornar um{' '}
            <HighlightText>especialista em programação</HighlightText>. Me
            considero dedicado e motivado, consigo resolver problemas complexos
            através de código. Além disso, possuo amplos conhecimentos em{' '}
            <HighlightText>desenvolvimento web</HighlightText>, sendo capaz de
            criar sites e APIs.
          </Text>

          <Text>
            Meu foco principal é o desenvolvimento web, mas também já estudei
            outras áreas, como mobile, arduino e games, logo possuo uma certa{' '}
            <HighlightText>versatilidade e disposição</HighlightText> para
            aprender tecnológias novas.
          </Text>
        </VStack>

        <Image
          alt="Silvano Marques"
          src={meImg.src}
          filter={{
            base: 'contrast(100%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
            lg: 'contrast(128%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(120%) sepia(0%)',
          }}
          bg="background.500"
          borderColor="brand.500"
          rounded="full"
          overflow="hidden"
          borderWidth="2px"
          color="white"
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

      <Text mt="10" maxW="400px">
        Ficou com alguma dúvida? <br /> Entre em contato agora mesmo.
      </Text>

      <ScrollButton dataScroll={CONTACT}>Contato</ScrollButton>
    </Section>
  );
}
