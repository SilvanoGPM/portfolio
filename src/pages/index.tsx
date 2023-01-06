import { Heading, Text } from '@chakra-ui/react';

import { DefaultLayout } from '$components/layout/DefaultLayout';

export default function Home() {
  return (
    <DefaultLayout>
      <Heading as="h1">Silvano Marques</Heading>
      <Text>Desenvolvedor Web</Text>
    </DefaultLayout>
  );
}
