import { Icon, IconButton, IconButtonProps } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';

import { useUIStore } from '$stores/ui';

export function OpenSidebarButton(props: Omit<IconButtonProps, 'aria-label'>) {
  const { openSidebar } = useUIStore();

  return (
    <IconButton
      {...props}
      aria-label="Abrir menu lateral"
      colorScheme="blackAlpha"
      color="white"
      fontSize="4xl"
      icon={<Icon as={AiOutlineMenu} />}
      onClick={openSidebar}
    />
  );
}
