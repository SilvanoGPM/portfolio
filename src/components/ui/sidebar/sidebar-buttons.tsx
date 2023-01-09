import { OpenSidebarButton } from './open-sidebar-button';
import { CloseSidebarButton } from './close-sidebar-button';

interface SidebarButtonsProps {
  sidebarIsOpen: boolean;
}

export function SidebarButtons({ sidebarIsOpen }: SidebarButtonsProps) {
  return (
    <>
      {!sidebarIsOpen && <OpenSidebarButton pos="absolute" right="8" top="8" />}

      {sidebarIsOpen && (
        <CloseSidebarButton pos="absolute" right="8" top="8" zIndex="sticky" />
      )}
    </>
  );
}
