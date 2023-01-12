import { Center, Image } from '@chakra-ui/react';
import Link from 'next/link';

import logoImg from '$assets/logo.png';

export function Logo() {
  return (
    <Center h="200px">
      <Link href="/" aria-label="Ir para o início">
        <Image
          alt="Letras S e M como se fosse um bloco de código HTML"
          src={logoImg.src}
          w={logoImg.width}
          h={logoImg.height}
        />
      </Link>
    </Center>
  );
}
