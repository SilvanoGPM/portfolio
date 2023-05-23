import { ExternalLink } from '$components/chakra/external-link';
import { Image } from '$components/chakra/image';

import { Project } from '.';

interface ThumbnailProps {
  project: Project;
}

export function Thumbnail({ project }: ThumbnailProps) {
  return (
    <ExternalLink
      href={String(project.url || project.repository)}
      animated={false}
      aria-label="Página do projeto"
    >
      <Image
        mt="4"
        src={String(project.thumbnail)}
        alt={project.name}
        objectFit="cover"
        maxH="400px"
        h="400px"
      />
    </ExternalLink>
  );
}
