import { Center, CircularProgress } from '@chakra-ui/react';

export function Loading() {
  return (
    <Center h="55vh" flexDirection="column">
      <CircularProgress isIndeterminate color="brand.500" />
    </Center>
  );
}
