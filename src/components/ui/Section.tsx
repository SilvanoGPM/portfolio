import { Box, BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { SubTitle } from '$components/chakra/SubTitle';
import { Replace } from '$utils/replace';

interface SectionProps extends Replace<BoxProps, { title?: ReactNode }> {
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

      <Box as="section" {...props}>
        {title && <SubTitle>{title}</SubTitle>}
        {children}
      </Box>
    </>
  );
}
