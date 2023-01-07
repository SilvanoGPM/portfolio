import { Box, Flex, Text } from '@chakra-ui/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Box h="100px" />

      <Flex
        position="absolute"
        bottom="0"
        h="100px"
        w="full"
        as="footer"
        justify="center"
        align="center"
        pt="12"
      >
        <Text>© Copyright {currentYear}.</Text>
      </Flex>
    </>
  );
}
