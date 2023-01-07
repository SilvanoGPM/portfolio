import { Center, Text } from '@chakra-ui/react';

export function InConstruction() {
  return (
    <Center w="full" h="50vh" fontSize="4xl" flexDirection="column">
      <Text fontSize="7xl">🚧</Text>
      <Text fontWeight="bold">Em construção...</Text>
    </Center>
  );
}
