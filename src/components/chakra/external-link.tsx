import { Link, LinkProps } from '@chakra-ui/react';

import { linkAnimation } from '$styles/tokens';

interface ExternalLinkProps extends LinkProps {
  animated?: boolean;
}

export function ExternalLink({
  animated = true,
  children,
  ...props
}: ExternalLinkProps) {
  return (
    <Link
      _hover={{ color: 'brand.500' }}
      transition="0.2s ease-in-out"
      isExternal
      sx={animated ? linkAnimation : props.sx}
      {...props}
    >
      {children}
    </Link>
  );
}
