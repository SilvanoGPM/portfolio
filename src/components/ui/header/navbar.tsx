import { Stack } from '@chakra-ui/react';

import { ActiveLink } from '$components/chakra/active-link';

import { ContentProps } from './content';

export function Navbar({ isLargeScreen }: ContentProps) {
  return (
    <Stack
      direction={isLargeScreen ? 'row' : 'column'}
      gap="4"
      align="center"
      as="nav"
      p="4"
    >
      <ActiveLink href="/" shouldMatchExactHref>
        Home
      </ActiveLink>

      <ActiveLink href="/projects">Projetos</ActiveLink>
      <ActiveLink href="/posts">Postagens</ActiveLink>
    </Stack>
  );
}
