import { HStack, Icon, Link } from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export function Footer() {
  return (
    <HStack fontSize="4xl" justify="center">
      <Link href="https://github.com/SilvanoGPM">
        <Icon
          as={AiFillGithub}
          transition="0.2s ease-in-out color"
          _hover={{ color: 'brand.500' }}
        />
      </Link>

      <Link href="https://www.linkedin.com/in/silvano-marques-8b964a210/">
        <Icon
          as={AiFillLinkedin}
          transition="0.2s ease-in-out color"
          _hover={{ color: 'brand.500' }}
        />
      </Link>
    </HStack>
  );
}
