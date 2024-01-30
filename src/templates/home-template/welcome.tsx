import { Box, Heading, Icon, Text } from '@chakra-ui/react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { FaLaptopCode } from 'react-icons/fa';
import ReactTypingEffect from 'react-typing-effect';

import { Section } from '$components/layout/section';
import { SlideFade } from '$components/ui/animations/slide-fade';
import { Lottie } from '$components/ui/lottie';
import { ScrollButton } from '$components/ui/scroll-button';
import { ABOUT_ME } from '$shared/sections';

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
          <Text fontWeight="bold" color="white">
            Seja bem vindo(a), meu nome é
          </Text>
        </Fade>

        <Fade delay={500} triggerOnce>
          <Heading
            as="h1"
            textTransform="uppercase"
            fontWeight="black"
            color="white"
          >
            <Text as="span" color="brand.500">
              Silvano
            </Text>{' '}
            Marques
          </Heading>

          <Box fontSize="2xl" fontWeight="bold" color="white">
            <ReactTypingEffect
              staticText="Desenvolvedor"
              text={['Front-end.', 'Web.']}
            />
          </Box>
        </Fade>

        <SlideFade delay={1000} direction="up" cascade>
          <Text mt="10">
            Programação, Sites, APIs, Open Source e muito café ☕.
          </Text>

          <ScrollButton
            dataScroll={ABOUT_ME}
            rightIcon={<Icon as={FaLaptopCode} />}
          >
            Mais sobre mim
          </ScrollButton>
        </SlideFade>
      </Box>

      <Zoom duration={500} triggerOnce>
        <Lottie
          speed={0.5}
          animation="/animations/welcome.json"
          transform="auto"
          translateX={['0', '0', '40px']}
          translateY="-14"
        />
      </Zoom>
    </Section>
  );
}
