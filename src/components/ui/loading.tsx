import { Center, CircularProgress, FlexProps } from '@chakra-ui/react';

export function Loading(props: FlexProps) {
  return (
    <Center h="55vh" flexDirection="column" {...props}>
      <CircularProgress isIndeterminate color="brand.500" />
    </Center>
  );
}
