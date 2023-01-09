import { Button, ButtonProps } from '@chakra-ui/react';

import { scrollToElement } from '$utils/scroll-to-element';

interface ScrollButtonProps extends ButtonProps {
  dataScroll: string;
  beforeScroll?: () => void;
}

export function ScrollButton({
  dataScroll,
  beforeScroll,
  children,
  ...props
}: ScrollButtonProps) {
  function handleScroll() {
    beforeScroll?.();
    scrollToElement(dataScroll);
  }

  return (
    <Button
      size="lg"
      maxW="400px"
      mt="2"
      variant="outline"
      colorScheme="brand"
      onClick={handleScroll}
      {...props}
    >
      {children}
    </Button>
  );
}
