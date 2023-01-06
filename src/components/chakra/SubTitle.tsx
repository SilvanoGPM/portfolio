import { Box, Heading, HeadingProps } from '@chakra-ui/react';

export function SubTitle({ children, ...props }: HeadingProps) {
  return (
    <>
      <Heading {...props} fontWeight="bold" textTransform="uppercase">
        {children}
      </Heading>

      <Box h="1" width="150px" bg="brand.500" mb="4" />
    </>
  );
}
