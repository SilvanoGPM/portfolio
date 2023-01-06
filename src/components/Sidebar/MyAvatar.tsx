import { Avatar, Center } from '@chakra-ui/react';
import Link from 'next/link';

export function MyAvatar() {
  return (
    <Center h="200px">
      <Link href="/">
        <a>
          <Avatar
            src="https://github.com/SilvanoGPM.png"
            filter="contrast(128%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(120%) sepia(0%)"
            name="Silvano Marques"
            title="Silvano Marques"
            bg="background.500"
            borderColor="brand.500"
            borderWidth="2px"
            color="white"
            size="2xl"
            width="200px"
            height="200px"
            transition="0.2s ease-in-out"
            _hover={{
              filter:
                'contrast(100%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
            }}
          />
        </a>
      </Link>
    </Center>
  );
}
