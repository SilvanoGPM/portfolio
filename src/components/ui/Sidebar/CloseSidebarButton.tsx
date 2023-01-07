import { Icon, IconButton, IconButtonProps } from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';

import { useUIStore } from '$stores/ui';
import { useScrollLock } from '$hooks/useScrollLock';

export function CloseSidebarButton(props: Omit<IconButtonProps, 'aria-label'>) {
  const { closeSidebar } = useUIStore();
  const { unlockScroll } = useScrollLock();

  function handleCloseSidebar() {
    closeSidebar();
    unlockScroll();
  }

  return (
    <IconButton
      {...props}
      aria-label="Fechar menu lateral"
      color="white"
      colorScheme="blackAlpha"
      bg="transparent"
      fontSize="4xl"
      icon={<Icon as={AiOutlineClose} />}
      onClick={handleCloseSidebar}
    />
  );
}
