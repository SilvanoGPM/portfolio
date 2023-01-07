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

      <Box px="8" pt="12" w="full">
        {children}
        <Footer />
      </Box>
    </Flex>
  );
}
