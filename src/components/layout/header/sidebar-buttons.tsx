import { OpenSidebarButton } from './open-sidebar-button';
import { CloseSidebarButton } from './close-sidebar-button';
import { Box } from '@chakra-ui/react';
import { glassmorphismContainer } from '$styles/tokens';

interface SidebarButtonsProps {
  sidebarIsOpen: boolean;
}

export function SidebarButtons({ sidebarIsOpen }: SidebarButtonsProps) {
  return (
    <>
      {!sidebarIsOpen && (
        <Box
          pos="fixed"
          right="8"
          top="8"
          zIndex="sticky"
          p="1"
          sx={glassmorphismContainer({
            bg: 'background.alpha.600',
          })}
        >
          <OpenSidebarButton />
        </Box>
      )}

      {sidebarIsOpen && (
        <CloseSidebarButton pos="fixed" right="8" top="8" zIndex="sticky" />
      )}
    </>
  );
}
