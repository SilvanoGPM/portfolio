import { linkAnimation } from '$styles/tokens';

import { Link, LinkProps } from '@chakra-ui/react';

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
      target="_blank"
      sx={animated ? linkAnimation : props.sx}
      {...props}
    >
      {children}
    </Link>
  );
}
