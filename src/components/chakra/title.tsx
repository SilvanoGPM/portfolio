import { Box, Heading, HeadingProps } from '@chakra-ui/react';

interface TitleProps extends HeadingProps {
  underlineWidth?: string;
  underlineHeight?: string;
}

export function Title({
  children,
  underlineWidth = '50px',
  underlineHeight = '5px',
  ...props
}: TitleProps) {
  return (
    <>
      <Heading {...props} fontWeight="bold" textTransform="uppercase">
        {children}
      </Heading>

      <Box
        h={underlineHeight}
        width={underlineWidth}
        bg="brand.500"
        rounded="3xl"
        mb="4"
        mt="2"
        mx={props.textAlign === 'center' ? 'auto' : '0'}
      />
    </>
  );
}
