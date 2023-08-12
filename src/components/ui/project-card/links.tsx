import { Button, Flex, Icon } from '@chakra-ui/react';
import { AiFillGithub, AiOutlineGlobal } from 'react-icons/ai';

import { ExternalLink } from '$components/chakra/external-link';

interface LinksProps {
  repository?: string | null;
  url?: string | null;
}

export function Links({ repository, url }: LinksProps) {
  return (
    <Flex gap="2" w="full" wrap="wrap">
      {url && (
        <ExternalLink href={url} animated={false} w="full">
          <Button rightIcon={<Icon as={AiOutlineGlobal} />} w="full">
            Visitar Site
          </Button>
        </ExternalLink>
      )}

      {repository && (
        <ExternalLink href={repository} animated={false} w="full">
          <Button
            rightIcon={<Icon as={AiFillGithub} />}
            variant="outline"
            w="full"
          >
            Repositório do projeto
          </Button>
        </ExternalLink>
      )}
    </Flex>
  );
}
