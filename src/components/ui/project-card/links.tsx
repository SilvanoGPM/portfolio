import { Icon } from '@chakra-ui/react';
import { AiFillGithub, AiOutlineGlobal } from 'react-icons/ai';

import { ExternalLink } from '$components/chakra/external-link';

interface LinksProps {
  repository?: string | null;
  url?: string | null;
}

export function Links({ repository, url }: LinksProps) {
  return (
    <>
      {repository && (
        <ExternalLink
          href={repository}
          animated={false}
          aria-label="Repositório do projeto"
        >
          <Icon as={AiFillGithub} />
        </ExternalLink>
      )}

      {url && (
        <ExternalLink
          href={url}
          animated={false}
          aria-label="Página do projeto"
        >
          <Icon as={AiOutlineGlobal} />
        </ExternalLink>
      )}
    </>
  );
}
