import { ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { Header } from './header';
import { Footer } from './footer';
import { ParticleBackground } from './particle-background';

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <ParticleBackground />

      <Flex
        direction="column"
        w="full"
        maxW="1080px"
        mx="auto"
        justify="space-between"
        p="8"
        pos="relative"
      >
        <Header />

        <Box w="full">{children}</Box>

        <Box w="full" pos="relative">
          <Footer />
        </Box>
      </Flex>
    </>
  );
}
