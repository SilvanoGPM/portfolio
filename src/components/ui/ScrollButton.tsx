import { Button, ButtonProps } from '@chakra-ui/react';

import { scrollToElement } from '$utils/scrollToElement';

interface ScrollButtonProps extends ButtonProps {
  dataScroll: string;
}

export function ScrollButton({
  dataScroll,
  children,
  ...props
}: ScrollButtonProps) {
  return (
    <Button
      size="lg"
      maxW="400px"
      mt="2"
      variant="outline"
      colorScheme="brand"
      onClick={() => scrollToElement(dataScroll)}
      {...props}
    >
      {children}
    </Button>
  );
}
