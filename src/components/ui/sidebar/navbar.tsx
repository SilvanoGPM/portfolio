import { VStack } from '@chakra-ui/react';

import { ActiveLink } from '$components/chakra/active-link';

export function Navbar() {
  return (
    <VStack w="full" align="center" mt="-8" as="nav">
      <ActiveLink href="/" shouldMatchExactHref>
        Home
      </ActiveLink>

      <ActiveLink href="/projects">Projetos</ActiveLink>
      <ActiveLink href="/posts">Postagens</ActiveLink>
    </VStack>
  );
}
