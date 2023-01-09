import { Box, Heading, Text } from '@chakra-ui/react';
import ReactTypingEffect from 'react-typing-effect';

import { Section } from '$components/ui/section';
import { ABOUT_ME } from '$shared/sections';
import { ScrollButton } from '$components/ui/scroll-button';

export function Welcome() {
  return (
    <Section h="100vh" justify="center" mt={{ base: '-28', lg: '0' }}>
      <Text fontWeight="bold">Seja bem vindo(a), meu nome é</Text>

      <Heading as="h1" textTransform="uppercase" fontWeight="black">
        <Text as="span" color="brand.500">
          Silvano
        </Text>{' '}
        Marques
      </Heading>

      <Box fontSize="2xl" fontWeight="bold">
        <ReactTypingEffect
          text={['Front-end.', 'Back-end.']}
          staticText="Desenvolvedor"
        />
      </Box>

      <Text mt="10">
        Programação, Sites, APIs, Open Source e muito café ☕.
      </Text>

      <ScrollButton dataScroll={ABOUT_ME}>Mais sobre mim 😃</ScrollButton>
    </Section>
  );
}
