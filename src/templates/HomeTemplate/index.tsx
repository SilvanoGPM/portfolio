import { DefaultLayout } from '$components/layout/DefaultLayout';
import { VStack } from '@chakra-ui/react';

import { Welcome } from './Welcome';
import { Technologies } from './Technologies';
import { AboutMe } from './AboutMe';
import { Services } from './Services';

export function HomeTemplate() {
  return (
    <DefaultLayout>
      <VStack align="start" spacing="16" as="main">
        <Welcome />
        <AboutMe />
        <Technologies />
        <Services />
      </VStack>
    </DefaultLayout>
  );
}
