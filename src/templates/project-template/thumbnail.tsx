import { Image } from '@chakra-ui/react';

import { ExternalLink } from '$components/chakra/external-link';

import { Project } from '.';

interface ThumbnailProps {
  project: Project;
}

export function Thumbnail({ project }: ThumbnailProps) {
  return (
    <ExternalLink
      href={String(project.url || project.repository)}
      animated={false}
      display="table"
    >
      <Image
        mt="4"
        src={String(project.thumbnail)}
        alt={project.name}
        objectFit="contain"
        maxH="400px"
      />
    </ExternalLink>
  );
}
