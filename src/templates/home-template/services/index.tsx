import { Flex } from '@chakra-ui/react';

import { ApiIcon, OtherIcon, WebIcon } from '$components/chakra/icons';
import { Section } from '$components/ui/section';

import { Card } from './card';

interface ServicesProps {
  api: string;
  web: string;
  other: string;
}

export function Services({ api, web, other }: ServicesProps) {
  return (
    <Section title="Serviços">
      <Flex
        align="center"
        justify={{ base: 'center', md: 'space-between' }}
        wrap="wrap"
        gap="1rem"
      >
        <Card title="APIs" description={api} Icon={ApiIcon} />

        <Card title="Sites" description={web} Icon={WebIcon} />

        <Card title="Outros" description={other} Icon={OtherIcon} />
      </Flex>
    </Section>
  );
}
