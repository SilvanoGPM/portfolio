import { LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Link } from '@chakra-ui/next-js';

import { Replace } from '$utils/replace';
import { linkAnimation } from '$styles/tokens';

interface ActiveLinkProps extends Replace<ChakraLinkProps, { href: string }> {
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactHref,
  ...props
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  let isActive = false;

  if (
    (asPath === '' || asPath == '/') &&
    (props.href === '' || props.href === '/')
  ) {
    isActive = true;
  }

  if (shouldMatchExactHref && (asPath === props.href || asPath === props.as)) {
    isActive = true;
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(props.href)) ||
      asPath.startsWith(String(props.as)))
  ) {
    isActive = true;
  }

  const color = isActive ? 'brand.500' : 'white';

  return (
    <Link
      {...props}
      color={color}
      textTransform="uppercase"
      fontWeight="semibold"
      fontSize="2xl"
      sx={linkAnimation}
    >
      {children}
    </Link>
  );
}
