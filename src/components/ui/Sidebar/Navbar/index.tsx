import { VStack } from '@chakra-ui/react';

import { Link } from './Link';

export function Navbar() {
  return (
    <VStack w="full" align="center" mt="-8" as="nav">
      <Link href="/">Home</Link>
      <Link href="/projects">Projetos</Link>
      <Link href="/posts">Postagens</Link>
    </VStack>
  );
}
