import { Icon, IconButton, IconButtonProps } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';

import { useUIStore } from '$stores/ui';
import { useScrollLock } from '$hooks/useScrollLock';

export function OpenSidebarButton(props: Omit<IconButtonProps, 'aria-label'>) {
  const { openSidebar } = useUIStore();
  const { lockScroll } = useScrollLock();

  function handleOpenSidebar() {
    openSidebar();
    lockScroll();
  }

  return (
    <IconButton
      {...props}
      aria-label="Abrir menu lateral"
      colorScheme="blackAlpha"
      bg="transparent"
      color="white"
      fontSize="4xl"
      icon={<Icon as={AiOutlineMenu} />}
      onClick={handleOpenSidebar}
    />
  );
}
