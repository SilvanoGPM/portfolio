import { HStack, Icon } from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { ExternalLink } from '$components/chakra/external-link';
import { ThemeColorSelector } from './theme-color-selector';

export function Footer() {
  return (
    <HStack fontSize="4xl" justify="center" color="white">
      <ThemeColorSelector />

      <ExternalLink
        href="https://github.com/SilvanoGPM"
        animated={false}
        aria-label="Meu github"
      >
        <Icon as={AiFillGithub} />
      </ExternalLink>

      <ExternalLink
        href="https://www.linkedin.com/in/silvano-marques-8b964a210/"
        animated={false}
        aria-label="Meu linkedin"
      >
        <Icon as={AiFillLinkedin} />
      </ExternalLink>
    </HStack>
  );
}
