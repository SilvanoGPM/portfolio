import { Icon } from '@chakra-ui/react';
import { AiFillGithub, AiOutlineGlobal } from 'react-icons/ai';

import { ExternalLink } from '$components/chakra/ExternalLink';

interface LinksProps {
  repository?: string | null;
  url?: string | null;
}

export function Links({ repository, url }: LinksProps) {
  return (
    <>
      {repository && (
        <ExternalLink href={repository}>
          <Icon as={AiFillGithub} />
        </ExternalLink>
      )}

      {url && (
        <ExternalLink href={url}>
          <Icon as={AiOutlineGlobal} />
        </ExternalLink>
      )}
    </>
  );
}
