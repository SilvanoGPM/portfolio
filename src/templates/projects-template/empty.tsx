import { Center, Icon, Text } from '@chakra-ui/react';
import { MdOutlineSearchOff } from 'react-icons/md';

export function Empty() {
  return (
    <Center h="55vh" flexDirection="column">
      <Icon as={MdOutlineSearchOff} fontSize={['6xl', '7xl', '8xl']} />

      <Text fontSize={['2xl', '4xl']} textAlign="center">
        Nenhum projeto foi encontrado.
      </Text>
    </Center>
  );
}
