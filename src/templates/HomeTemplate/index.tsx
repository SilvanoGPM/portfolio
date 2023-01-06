import { DefaultLayout } from '$components/layout/DefaultLayout';
import { VStack } from '@chakra-ui/react';

import { Welcome } from './Welcome';
import { AboutMe } from './AboutMe';

export function HomeTemplate() {
  return (
    <DefaultLayout>
      <VStack align="start" spacing="16" as="main">
        <Welcome />
        <AboutMe />
      </VStack>
    </DefaultLayout>
  );
}
