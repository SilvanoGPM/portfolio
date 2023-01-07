import { Flex, FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { SubTitle } from '$components/chakra/SubTitle';
import { Replace } from '$utils/replace';

interface SectionProps extends Replace<FlexProps, { title?: ReactNode }> {
  dataScroll?: string;
}

export function Section({
  title,
  dataScroll,
  children,
  ...props
}: SectionProps) {
  return (
    <>
      {dataScroll && <div data-scroll={dataScroll} />}

      <Flex as="section" direction="column" {...props}>
        {title && <SubTitle>{title}</SubTitle>}
        {children}
      </Flex>
    </>
  );
}
