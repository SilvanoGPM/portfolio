import { ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { Sidebar } from '$components/ui/sidebar';
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
      <Sidebar />

      <Flex direction="column" w="full" justify="space-between">
        <Box w="full" px="8" pt="12">
          {children}
        </Box>

        <Box w="full" pos="relative">
          <Footer />
        </Box>
      </Flex>
    </Flex>
  );
}
