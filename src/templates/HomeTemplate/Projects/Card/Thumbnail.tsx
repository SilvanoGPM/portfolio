import { Image } from '@chakra-ui/react';

import { Link } from '$components/chakra/Link';

interface ThumbnailProps {
  href: string;
  thumbnail?: string | null;
}

export function Thumbnail({ href, thumbnail }: ThumbnailProps) {
  return (
    <Link
      href={href}
      animated={false}
      w={{ base: 'full', lg: '60%' }}
      h={{ base: '50%', lg: 'full' }}
      overflow="hidden"
    >
      <Image w="full" h="full" src={String(thumbnail)} objectFit="cover" />
    </Link>
  );
}
