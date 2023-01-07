import { Box, Button, Heading, Text } from '@chakra-ui/react';
import ReactTypingEffect from 'react-typing-effect';

import { Section } from '$components/ui/Section';
import { scrollToElement } from '$utils/scrollToElement';
import { ABOUT_ME } from '$data/sections';

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
        Sites, APIs, Open Source, curiosidade e muito café ☕.
      </Text>

      <Button
        maxW="300px"
        mt="2"
        variant="outline"
        colorScheme="brand"
        onClick={() => scrollToElement(ABOUT_ME)}
      >
        Mais sobre mim 😃
      </Button>
    </Section>
  );
}
