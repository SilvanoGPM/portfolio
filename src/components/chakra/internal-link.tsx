import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

import NextLink from 'next/link';

import { linkAnimation } from '$styles/tokens';

interface LinkProps extends ChakraLinkProps {
  animated?: boolean;
}

export function Link({ animated = true, children, ...props }: LinkProps) {
  return (
    <ChakraLink
      {...props}
      as={NextLink}
      sx={animated ? linkAnimation : props.sx}
    >
      {children}
    </ChakraLink>
  );
}
