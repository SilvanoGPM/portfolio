import { Flex } from '@chakra-ui/react';

import { ApiIcon, OtherIcon, WebIcon } from '$components/chakra/icons';
import { Section } from '$components/ui/section';
import apiImg from '$assets/services/api.jpg';
import webImg from '$assets/services/web.jpg';
import softwareImg from '$assets/services/software.jpg';

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
        <Card
          title="APIs"
          more="Desejo saber mais sobre o desenvolvimento de APIs."
          description={api}
          image={apiImg.src}
          Icon={ApiIcon}
        />

        <Card
          title="Sites"
          more="Desejo saber mais sobre o desenvolvimento de sites."
          description={web}
          image={webImg.src}
          Icon={WebIcon}
        />

        <Card
          title="Outros"
          more="Desejo saber mais sobre o desenvolvimento de softwares."
          description={other}
          image={softwareImg.src}
          Icon={OtherIcon}
        />
      </Flex>
    </Section>
  );
}
