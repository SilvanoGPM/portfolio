import { Flex, FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Fade } from 'react-awesome-reveal';

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
      <Flex
        data-scroll={dataScroll}
        w="full"
        as="section"
        direction="column"
        {...props}
      >
        {title && (
          <Fade triggerOnce delay={300}>
            <Title
              textAlign={props.textAlign}
              underlineHeight={underlineHeight}
            >
              {title}
            </Title>
          </Fade>
        )}
        {children}
      </Flex>
    </>
  );
}
