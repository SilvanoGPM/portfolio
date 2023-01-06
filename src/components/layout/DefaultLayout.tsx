import { Box, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Sidebar } from '$components/ui/Sidebar';
import { ParticleBackground } from '$components/ui/ParticleBackground';

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Flex>
      <ParticleBackground />
      <Sidebar />
      <Box px="8" py="12" mt={{ base: '8', lg: '0' }}>
        {children}
      </Box>
    </Flex>
  );
}
