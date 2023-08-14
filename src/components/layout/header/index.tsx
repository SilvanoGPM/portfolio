import { Box, Center, Flex, useEventListener } from '@chakra-ui/react';

import { glassmorphismContainer } from '$styles/tokens';
import { useUIStore } from '$stores/ui';
import { useScreenVersion } from '$hooks/use-screen-version';
import { throttle } from '$utils/throttle';

import { Content } from './content';
import { SidebarButtons } from './sidebar-buttons';

const ON_SCROLL_THROTTLE_MILLIS = 200;
const MIN_HEIGHT_TO_TOP = 50;

export function Header() {
  const { sidebarIsOpen, headerInTop, setHeaderInTop } = useUIStore();

  const isLargeScreen = useScreenVersion('LG');

  function onScroll() {
    if (isLargeScreen) {
      setHeaderInTop(window.scrollY < MIN_HEIGHT_TO_TOP);
    }
  }

  useEventListener('scroll', throttle(onScroll, ON_SCROLL_THROTTLE_MILLIS));

  if (!isLargeScreen) {
    return (
      <>
        <Flex
          pos="fixed"
          left="0"
          bg="background.400"
          direction="column"
          py="4"
          h="100vh"
          top={sidebarIsOpen ? '0' : '-100vh'}
          right="0"
          zIndex="sticky"
          justify="space-evenly"
          w="100%"
          overflow="hidden"
          transition="0.2s ease-in"
          sx={glassmorphismContainer({
            bg: 'background.alpha.600',
          })}
        >
          <Content isLargeScreen={isLargeScreen} />
        </Flex>

        <SidebarButtons sidebarIsOpen={sidebarIsOpen} />
      </>
    );
  }

  const headerBg = headerInTop
    ? { '&': { bg: 'transparent' } }
    : glassmorphismContainer({ bg: 'background.alpha.600' });

  return (
    <>
      <Box h="100px" w="full" />

      <Center
        pos="fixed"
        zIndex="modal"
        top="0"
        left="0"
        h="100px"
        w="full"
        transition="0.2s ease-in-out"
        sx={headerBg}
      >
        <Flex
          w="full"
          maxW="1080px"
          px="8"
          justify="space-between"
          align="center"
        >
          <Content isLargeScreen={isLargeScreen} />
        </Flex>
      </Center>
    </>
  );
}
