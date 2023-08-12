import { Box, Heading, HeadingProps } from '@chakra-ui/react';

interface SubTitleProps extends HeadingProps {
  underlineWidth?: string;
  underlineHeight?: string;
}

export function Title({
  children,
  underlineWidth = '150px',
  underlineHeight = '1',
  ...props
}: SubTitleProps) {
  return (
    <>
      <Heading {...props} fontWeight="bold" textTransform="uppercase">
        {children}
      </Heading>

      <Box
        h={underlineHeight}
        width={underlineWidth}
        bg="brand.500"
        mb="4"
        mx={props.textAlign === 'center' ? 'auto' : '0'}
      />
    </>
  );
}
