import { Button, FlexProps, Icon, Wrap, WrapItem } from '@chakra-ui/react';
import { AiFillGithub, AiOutlineGlobal } from 'react-icons/ai';

import { ExternalLink } from '$components/chakra/external-link';

interface LinksProps extends FlexProps {
  repository?: string | null;
  url?: string | null;
}

export function Links({ repository, url, ...props }: LinksProps) {
  return (
    <Wrap w="full" {...props}>
      {url && (
        <WrapItem flex="1">
          <Button
            as={ExternalLink}
            href={url}
            animated={false}
            rightIcon={<Icon as={AiOutlineGlobal} />}
            variant="outline"
            w="full"
          >
            Visitar Site
          </Button>
        </WrapItem>
      )}

      {repository && (
        <WrapItem flex="1">
          <Button
            as={ExternalLink}
            href={repository}
            animated={false}
            rightIcon={<Icon as={AiFillGithub} />}
            variant="outline"
            w="full"
          >
            Repositório do projeto
          </Button>
        </WrapItem>
      )}
    </Wrap>
  );
}
