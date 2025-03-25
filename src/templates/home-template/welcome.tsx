import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { FaLaptopCode, FaRocket } from 'react-icons/fa';
import ReactTypingEffect from 'react-typing-effect';

import { Section } from '$components/layout/section';
import { SlideFade } from '$components/ui/animations/slide-fade';
import { Lottie } from '$components/ui/lottie';
import { ScrollButton } from '$components/ui/scroll-button';
import { ABOUT_ME, PROJECTS } from '$shared/sections';
import { DESKTOP_HEIGHT } from '$components/layout/header';

export function Welcome() {
  return (
    <Section
      // 100px é o tamanho do header.
      h={`calc(100vh - ${DESKTOP_HEIGHT})`}
      mt={{ base: '16', md: '0' }}
      justify="space-between"
      align="center"
      direction={{ base: 'column', md: 'row' }}
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
              text={['FullStack.', 'Front-end.', 'Back-end.']}
            />
          </Box>
        </Fade>

        <SlideFade delay={1000} direction="up" cascade>
          <Text mt="10">
            Desenvolvendo ideias, criando soluções e explorando o código 💡.
          </Text>

          <Flex gap="2" direction={{ base: 'column', md: 'row' }}>
            <ScrollButton
              dataScroll={PROJECTS}
              size="md"
              rightIcon={<Icon as={FaRocket} />}
            >
              Meus projetos
            </ScrollButton>

            <ScrollButton
              dataScroll={ABOUT_ME}
              variant="outline"
              size="md"
              rightIcon={<Icon as={FaLaptopCode} />}
            >
              Sobre mim
            </ScrollButton>
          </Flex>
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
