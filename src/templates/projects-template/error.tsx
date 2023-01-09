import { Center, Icon, Text } from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';

export function Error() {
  return (
    <Center h="55vh" flexDirection="column">
      <Icon as={AiOutlineClose} fontSize={['6xl', '7xl', '8xl']} />

      <Text fontSize={['2xl', '4xl']} textAlign="center">
        Aconteceu um erro ao tentar pesquisar os projetos.
      </Text>
    </Center>
  );
}
