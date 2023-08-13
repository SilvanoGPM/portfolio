import { Image } from '$components/chakra/image';

interface ProjectImageProps {
  image?: string | null;
  alt: string;
  category: string;
}

export function ProjectImage({ image, alt, category }: ProjectImageProps) {
  return (
    <Image
      src={String(image)}
      alt={alt}
      objectFit={category === 'mobile' ? 'contain' : 'cover'}
      minH="450px"
    />
  );
}
