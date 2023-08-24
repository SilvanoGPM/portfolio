import { Icon, IconButton, useClipboard, useToast } from '@chakra-ui/react';
import { AiFillCopy } from 'react-icons/ai';

interface CopyCodeProps {
  code: string;
}

export function CopyCode({ code }: CopyCodeProps) {
  const toast = useToast({
    position: 'bottom-left',
  });

  const { onCopy } = useClipboard(code);

  function handleCopy() {
    onCopy();

    toast({
      title: 'Código copiado',
      status: 'success',
      isClosable: true,
      duration: 3000,
    });
  }

  return (
    <IconButton
      aria-label="Copiar código"
      zIndex="10"
      pos="absolute"
      top="4"
      right="2"
      onClick={handleCopy}
      icon={<Icon as={AiFillCopy} />}
    />
  );
}
