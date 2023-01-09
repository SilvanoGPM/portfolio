import { HStack, Icon } from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { ExternalLink } from '$components/chakra/external-link';

export function Footer() {
  return (
    <HStack fontSize="4xl" justify="center">
      <ExternalLink href="https://github.com/SilvanoGPM" animated={false}>
        <Icon as={AiFillGithub} />
      </ExternalLink>

      <ExternalLink
        href="https://www.linkedin.com/in/silvano-marques-8b964a210/"
        animated={false}
      >
        <Icon as={AiFillLinkedin} />
      </ExternalLink>
    </HStack>
  );
}
