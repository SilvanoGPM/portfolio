import { Center, CenterProps, Icon, Text } from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';

interface ErrorProps extends CenterProps {
  message: string;
}

export function Error({ message, ...props }: ErrorProps) {
  return (
    <Center h="55vh" flexDirection="column" {...props}>
      <Icon as={AiOutlineClose} fontSize={['6xl', '7xl', '8xl']} />

      <Text fontSize={['2xl', '4xl']} textAlign="center">
        {message}
      </Text>
    </Center>
  );
}
