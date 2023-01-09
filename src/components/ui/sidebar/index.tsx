import { Box, Flex, FlexProps } from '@chakra-ui/react';

import { glassmorphismContainer } from '$styles/tokens';
import { useUIStore } from '$stores/ui';
import { useScreenVersion } from '$hooks/use-screen-version';

import { Content } from './content';
import { SidebarButtons } from './sidebar-buttons';

export function Sidebar() {
  const { sidebarIsOpen } = useUIStore();

  const isLargeScreen = useScreenVersion('LG');

  const sharedStyles: FlexProps = {
    pos: 'fixed',
    left: '0',
    h: '100vh',
    bg: 'background.400',
    direction: 'column',
    py: '4',
    sx: glassmorphismContainer({ bg: 'backgroundAlpha.600', blur: '2px' }),
  };

  if (!isLargeScreen) {
    return (
      <>
        <Flex
          top={sidebarIsOpen ? '0' : '-100vh'}
          right="0"
          zIndex="sticky"
          justify="space-evenly"
          w="100%"
          overflow="hidden"
          transition="0.2s ease-in"
          {...sharedStyles}
        >
          <Content />
        </Flex>

        <SidebarButtons sidebarIsOpen={sidebarIsOpen} />
      </>
    );
  }

  const sidebarSizes: FlexProps = {
    minW: '400px',
    h: '100vh',
    minH: '100vh',
  };

  return (
    <>
      <Box {...sidebarSizes} />

      <Flex top="0" justify="space-between" {...sharedStyles} {...sidebarSizes}>
        <Content />
      </Flex>
    </>
  );
}
