import { Box, Heading, Text } from '@chakra-ui/react';
import ReactTypingEffect from 'react-typing-effect';
import { Fade, Zoom } from 'react-awesome-reveal';

import { Section } from '$components/layout/section';
import { ABOUT_ME } from '$shared/sections';
import { ScrollButton } from '$components/ui/scroll-button';
import { Lottie } from '$components/ui/lottie';
import { ShineText } from '$components/chakra/shine-text';
import devAnimation from '$assets/lottie/dev.json';
import { SlideFade } from '$components/ui/animations/slide-fade';

export function Welcome() {
  return (
    <Section
      justify="space-between"
      mt={{ base: '20', md: '8', lg: '0' }}
      direction={{ base: 'column', md: 'row' }}
      align="center"
    >
      <Box>
        <Fade triggerOnce>
          <Text fontWeight="bold">Seja bem vindo(a), meu nome é</Text>
        </Fade>

        <Fade delay={500} triggerOnce>
          <Heading as="h1" textTransform="uppercase" fontWeight="black">
            <ShineText
              as="span"
              bgGradient="linear(to-r, brand.500, brand.900)"
            >
              Silvano
            </ShineText>{' '}
            Marques
          </Heading>

          <Box fontSize="2xl" fontWeight="bold" color="white">
            <ReactTypingEffect
              staticText="Desenvolvedor"
              text={['Front-end.', 'Back-end.', 'FullStack.']}
            />
          </Box>
        </Fade>

        <SlideFade delay={1000} direction="up" cascade>
          <Text mt="10">
            Programação, Sites, APIs, Open Source e muito café ☕.
          </Text>

          <ScrollButton dataScroll={ABOUT_ME}>Mais sobre mim 😃</ScrollButton>
        </SlideFade>
      </Box>

      <Zoom duration={500} triggerOnce>
        <Lottie
          speed={0.5}
          animation={devAnimation}
          transform="auto"
          translateX={['0', '0', '40px']}
        />
      </Zoom>
    </Section>
  );
}
