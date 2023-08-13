import { Flex, Text, Icon } from '@chakra-ui/react';
import { AiFillPhone } from 'react-icons/ai';

import { Section } from '$components/layout/section';
import { ABOUT_ME, CONTACT } from '$shared/sections';
import { ScrollButton } from '$components/ui/scroll-button';
import { Image } from '$components/chakra/image';

import meImg from '$assets/me.png';
import { Markdown } from '$components/ui/markdown';

interface AboutMeProps {
  text: string;
}

export function AboutMe({ text }: AboutMeProps) {
  return (
    <Section title="Sobre mim" dataScroll={ABOUT_ME} scrollMarginTop="120px">
      <Flex
        wrap="wrap"
        w="full"
        align="center"
        justify="space-between"
        gap="1rem"
      >
        <Markdown maxW="550px" fontSize="xl" textAlign="justify" spacing="4">
          {text}
        </Markdown>

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

      <ScrollButton dataScroll={CONTACT} rightIcon={<Icon as={AiFillPhone} />}>
        Contato
      </ScrollButton>
    </Section>
  );
}
