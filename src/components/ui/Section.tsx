import { Box, BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { SubTitle } from '$components/chakra/SubTitle';
import { Replace } from '$utils/replace';

type SectionProps = Replace<BoxProps, { title?: ReactNode }>;

export function Section({ title, children, ...props }: SectionProps) {
  return (
    <Box as="section" {...props}>
      {title && <SubTitle>{title}</SubTitle>}
      {children}
    </Box>
  );
}
