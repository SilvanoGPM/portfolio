import { Flex, Text } from '@chakra-ui/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      h="100px"
      w="full"
      as="footer"
      justify="center"
      align="center"
      pt="12"
    >
      <Text lineHeight="10">© Copyright {currentYear}.</Text>
    </Flex>
  );
}
