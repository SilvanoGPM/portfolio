import { Box, Heading, HeadingProps } from '@chakra-ui/react';

interface SubTitleProps extends HeadingProps {
  underlineWidth?: string;
}

export function Title({
  children,
  underlineWidth = '150px',
  ...props
}: SubTitleProps) {
  return (
    <>
      <Heading {...props} fontWeight="bold" textTransform="uppercase">
        {children}
      </Heading>

      <Box h="1" width={underlineWidth} bg="brand.500" mb="4" />
    </>
  );
}
