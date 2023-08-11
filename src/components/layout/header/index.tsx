import { Box, Center, Flex, useEventListener } from '@chakra-ui/react';

import { glassmorphismContainer } from '$styles/tokens';
import { useUIStore } from '$stores/ui';
import { useScreenVersion } from '$hooks/use-screen-version';

import { Content } from './content';
import { SidebarButtons } from './sidebar-buttons';
import { debounce } from '$utils/debounce';

const ON_SCROLL_DEBOUNCE_MILLIS = 50;
const MIN_HEIGHT_TO_TOP = 50;

export function Header() {
  const { sidebarIsOpen, headerInTop, setHeaderInTop } = useUIStore();

  const isLargeScreen = useScreenVersion('LG');

  const onScroll = debounce(() => {
    if (isLargeScreen) {
      setHeaderInTop(window.scrollY < MIN_HEIGHT_TO_TOP);
    }
  }, ON_SCROLL_DEBOUNCE_MILLIS);

  useEventListener('scroll', onScroll);

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
