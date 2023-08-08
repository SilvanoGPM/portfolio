import { ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { Header } from '$components/ui/header';
import { ParticleBackground } from '$components/ui/particle-background';
import { Footer } from '$components/ui/footer';
import { thinScrollbar } from '$styles/tokens';

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Flex sx={thinScrollbar}>
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
    </Flex>
  );
}
