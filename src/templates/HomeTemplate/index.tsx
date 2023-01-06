import { Box, Heading, Text } from '@chakra-ui/react';
import ReactTypingEffect from 'react-typing-effect';

import { DefaultLayout } from '$components/layout/DefaultLayout';

export function HomeTemplate() {
  return (
    <DefaultLayout>
      <Text>Seja bem vindo, eu me chamo</Text>

      <Heading as="h1" textTransform="uppercase" fontWeight="bold">
        <Text as="span" color="brand.500">
          Silvano
        </Text>{' '}
        Marques
      </Heading>

      <Box fontSize="2xl">
        <ReactTypingEffect
          text={['Front-end.', 'Back-end.']}
          staticText="Desenvolvedor"
        />
      </Box>
    </DefaultLayout>
  );
}
