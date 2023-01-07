import { Center, Image } from '@chakra-ui/react';
import Link from 'next/link';

import logoImg from '$assets/logo.png';

export function MyAvatar() {
  return (
    <Center h="200px">
      <Link href="/">
        <a>
          <Image src={logoImg.src} w="250px" />
        </a>
      </Link>
    </Center>
  );
}
