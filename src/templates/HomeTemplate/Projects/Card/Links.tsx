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
        <ExternalLink href={repository} animated={false}>
          <Icon as={AiFillGithub} />
        </ExternalLink>
      )}

      {url && (
        <ExternalLink href={url} animated={false}>
          <Icon as={AiOutlineGlobal} />
        </ExternalLink>
      )}
    </>
  );
}
