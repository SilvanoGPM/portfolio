import { Flex } from '@chakra-ui/react';

import { ApiIcon, OtherIcon, WebIcon } from '$components/chakra/icons';
import { Section } from '$components/layout/section';

import { Card } from './card';

interface ServicesProps {
  api: string;
  web: string;
  other: string;
}

export function Services({ api, web, other }: ServicesProps) {
  return (
    <Section title="Serviços" align="center" textAlign="center">
      <Flex
        align="center"
        justify={{ base: 'center', md: 'space-between' }}
        wrap="wrap"
        gap="1rem"
      >
        <Card
          title="Sites"
          more="Desejo saber mais sobre o desenvolvimento de sites."
          description={web}
          Icon={WebIcon}
        />

        <Card
          title="APIs"
          more="Desejo saber mais sobre o desenvolvimento de APIs."
          description={api}
          Icon={ApiIcon}
        />

        <Card
          title="Outros"
          more="Desejo saber mais sobre o desenvolvimento de softwares."
          description={other}
          Icon={OtherIcon}
        />
      </Flex>
    </Section>
  );
}
