import { linkAnimation } from '$styles/tokens';
import { Replace } from '$utils/replace';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

import NextLink from 'next/link';
import { useRouter } from 'next/router';

type LinkProps = Replace<ChakraLinkProps, { href: string }>;

export function Link({ href, children, ...props }: LinkProps) {
  const { asPath } = useRouter();

  const isInPath = asPath === href || asPath === props.as;
  const color = isInPath ? 'brand.500' : 'white';

  return (
    <ChakraLink
      {...props}
      as={NextLink}
      href={href}
      color={color}
      textTransform="uppercase"
      fontWeight="semibold"
      fontSize="2xl"
      sx={linkAnimation}
    >
      {children}
    </ChakraLink>
  );
}
