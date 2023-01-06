import { Box, Heading, Text } from '@chakra-ui/react';
import ReactTypingEffect from 'react-typing-effect';

export function Welcome() {
  return (
    <Box as="section">
      <Text fontWeight="bold">Seja bem vindo(a), meu nome é</Text>

      <Heading as="h1" textTransform="uppercase" fontWeight="black">
        <Text as="span" color="brand.500">
          Silvano
        </Text>{' '}
        Marques
      </Heading>

      <Box fontSize="2xl" fontWeight="bold">
        <ReactTypingEffect
          text={['Front-end.', 'Back-end.']}
          staticText="Desenvolvedor"
        />
      </Box>
    </Box>
  );
}
