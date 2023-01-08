import { DefaultLayout } from '$components/layout/DefaultLayout';
import { VStack } from '@chakra-ui/react';

import { Welcome } from './Welcome';
import { Technologies, TechnologiesProps } from './Technologies';
import { AboutMe } from './AboutMe';
import { Services } from './Services';

export interface HomeTemplateProps {
  technologies: TechnologiesProps;
}

export function HomeTemplate({ technologies }: HomeTemplateProps) {
  return (
    <DefaultLayout>
      <VStack align="start" spacing="16" as="main">
        <Welcome />
        <AboutMe />
        <Technologies {...technologies} />
        <Services />
      </VStack>
    </DefaultLayout>
  );
}
