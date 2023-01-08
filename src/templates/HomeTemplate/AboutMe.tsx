import { Avatar, Flex, Text, VStack } from '@chakra-ui/react';

import { HighlightText } from '$components/chakra/HighlightText';
import { Section } from '$components/ui/Section';
import { ABOUT_ME } from '$data/sections';
import { getMyAge } from '$utils/getMyAge';

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
            aprender coisas novas.
          </Text>
        </VStack>

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
