import { Link } from '$components/chakra/internal-link';
import { Image } from '$components/chakra/image';

interface ThumbnailProps {
  href: string;
  name: string;
  thumbnail?: string | null;
}

export function Thumbnail({ href, thumbnail, name }: ThumbnailProps) {
  return (
    <Link
      href={href}
      animated={false}
      pos="relative"
      aria-label="Saiba mais sobre este projeto"
      w={{ base: 'full', lg: '60%' }}
      h={{ base: '50%', lg: 'full' }}
      overflow="hidden"
    >
      <Image src={String(thumbnail)} alt={name} h="full" objectFit="cover" />
    </Link>
  );
}
