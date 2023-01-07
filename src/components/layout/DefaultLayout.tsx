import { Box, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Sidebar } from '$components/ui/Sidebar';
import { ParticleBackground } from '$components/ui/ParticleBackground';
import { Footer } from '$components/ui/Footer';
import { thinScrollbar } from '$styles/tokens';

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Flex sx={thinScrollbar}>
      <ParticleBackground />
      <Sidebar />

      <Box w="full" pos="relative">
        <Box w="full" px="8" pt="12">
          {children}
        </Box>

        <Footer />
      </Box>
    </Flex>
  );
}
