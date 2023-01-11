import { Center, CenterProps, Icon, Text } from '@chakra-ui/react';
import { MdOutlineSearchOff } from 'react-icons/md';

interface EmptyProps extends CenterProps {
  message: string;
}

export function Empty({ message, ...props }: EmptyProps) {
  return (
    <Center h="55vh" flexDirection="column" {...props}>
      <Icon as={MdOutlineSearchOff} fontSize={['6xl', '7xl', '8xl']} />

      <Text fontSize={['2xl', '4xl']} textAlign="center">
        {message}
      </Text>
    </Center>
  );
}
