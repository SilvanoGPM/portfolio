import { Box, Flex, FlexProps, useBreakpointValue } from '@chakra-ui/react';

import { glassmorphismContainer } from '$styles/tokens';
import { useUIStore } from '$stores/ui';

import { Content } from './Content';
import { OpenSidebarButton } from './OpenSidebarButton';
import { CloseSidebarButton } from './CloseSidebarButton';

export function Sidebar() {
  const { sidebarIsOpen } = useUIStore();

  const isSmallScreen = useBreakpointValue(
    {
      base: true,
      lg: false,
    },
    { ssr: false },
  );

  const sharedStyles: FlexProps = {
    bg: 'background.400',
    direction: 'column',
    py: '4',
    sx: glassmorphismContainer({ bg: 'backgroundAlpha.600', blur: '2px' }),
  };

  if (isSmallScreen) {
    return (
      <>
        <Flex
          position="fixed"
          top={sidebarIsOpen ? '0' : '-100vh'}
          left="0"
          right="0"
          zIndex="sticky"
          transition="0.2s ease-in"
          w="100%"
          h="100vh"
          overflow="hidden"
          justify="space-evenly"
          {...sharedStyles}
        >
          <Content />
        </Flex>

        {!sidebarIsOpen && (
          <OpenSidebarButton pos="absolute" right="8" top="8" />
        )}

        {sidebarIsOpen && (
          <CloseSidebarButton
            pos="absolute"
            right="8"
            top="8"
            zIndex="sticky"
          />
        )}
      </>
    );
  }

  return (
    <>
      <Box minW="400px" h="100vh" minH="500px" />

      <Flex
        pos="fixed"
        top="0"
        left="0"
        justify="space-between"
        w="400px"
        h="100vh"
        minH="500px"
        {...sharedStyles}
      >
        <Content />
      </Flex>
    </>
  );
}
