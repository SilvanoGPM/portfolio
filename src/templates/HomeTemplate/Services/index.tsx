import { ApiIcon, OtherIcon, WebIcon } from '$components/chakra/Icons';
import { Flex } from '@chakra-ui/react';

import { Section } from '$components/ui/Section';

import { Card } from './Card';

export function Services() {
  return (
    <Section title="Serviços">
      <Flex
        align="center"
        justify={{ base: 'center', md: 'space-between' }}
        wrap="wrap"
        gap="1rem"
      >
        <Card
          title="APIs"
          description="Desenvolvo uma API para o seu sistema com Java e Spring Boot ou integro uma já criada ao seu sistema."
          Icon={ApiIcon}
        />

        <Card
          title="Sites"
          description="Desenvolvo diversos tipos de sites, Landing Pages, Blogs, Portfólios, entre outros."
          Icon={WebIcon}
        />

        <Card
          title="Outros"
          description="Desenvolvo um software específico para você ou sua empresa."
          Icon={OtherIcon}
        />
      </Flex>
    </Section>
  );
}
