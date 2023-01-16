import { Flex, FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Title } from '$components/chakra/title';
import { Replace } from '$utils/replace';

interface SectionProps extends Replace<FlexProps, { title?: ReactNode }> {
  dataScroll?: string;
  underlineHeight?: string;
}

export function Section({
  title,
  dataScroll,
  children,
  underlineHeight,
  ...props
}: SectionProps) {
  return (
    <>
      {dataScroll && <div data-scroll={dataScroll} />}

      <Flex w="full" as="section" direction="column" {...props}>
        {title && <Title underlineHeight={underlineHeight}>{title}</Title>}
        {children}
      </Flex>
    </>
  );
}
