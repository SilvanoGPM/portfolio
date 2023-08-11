import { Box, Heading, Text } from '@chakra-ui/react';
import ReactTypingEffect from 'react-typing-effect';

import { Section } from '$components/layout/section';
import { ABOUT_ME } from '$shared/sections';
import { ScrollButton } from '$components/ui/scroll-button';
import { Lottie } from '$components/ui/lottie';
import devAnimation from '$assets/lottie/dev.json';

export function Welcome() {
  return (
    <Section
      justify="space-between"
      mt={{ base: '20', md: '8', lg: '0' }}
      direction={{ base: 'column', md: 'row' }}
      align="center"
    >
      <Box>
        <Text fontWeight="bold">Seja bem vindo(a), meu nome é</Text>

        <Heading as="h1" textTransform="uppercase" fontWeight="black">
          <Text
            as="span"
            bgClip="text"
            bgGradient="linear(to-r, brand.500, brand.200)"
          >
            Silvano
          </Text>{' '}
          Marques
        </Heading>

        <Box fontSize="2xl" fontWeight="bold" color="white">
          <ReactTypingEffect
            staticText="Desenvolvedor"
            text={['Front-end.', 'Back-end.', 'FullStack.']}
          />
        </Box>

        <Text mt="10">
          Programação, Sites, APIs, Open Source e muito café ☕.
        </Text>

        <ScrollButton dataScroll={ABOUT_ME}>Mais sobre mim 😃</ScrollButton>
      </Box>

      <Box maxH="400px">
        <Lottie speed={0.5} animation={devAnimation} />
      </Box>
    </Section>
  );
}
