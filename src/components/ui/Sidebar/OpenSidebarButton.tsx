import { IconButtonProps } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';

import { useUIStore } from '$stores/ui';
import { useScrollLock } from '$hooks/useScrollLock';

import { SidebarButton } from './SidebarButon';

export function OpenSidebarButton(props: Omit<IconButtonProps, 'aria-label'>) {
  const { openSidebar } = useUIStore();
  const { lockScroll } = useScrollLock();

  function handleOpenSidebar() {
    openSidebar();
    lockScroll();
  }

  return (
    <SidebarButton
      {...props}
      aria-label="Abrir menu"
      icon={AiOutlineMenu}
      onClick={handleOpenSidebar}
    />
  );
}
