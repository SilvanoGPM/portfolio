import { Icon, IconButton, IconButtonProps } from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';

import { useUIStore } from '$stores/ui';

export function CloseSidebarButton(props: Omit<IconButtonProps, 'aria-label'>) {
  const { closeSidebar } = useUIStore();

  return (
    <IconButton
      {...props}
      aria-label="Abrir menu lateral"
      color="white"
      colorScheme="blackAlpha"
      fontSize="4xl"
      icon={<Icon as={AiOutlineClose} />}
      onClick={closeSidebar}
    />
  );
}
