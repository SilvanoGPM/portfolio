import { Center, CenterProps, Text, TextProps } from '@chakra-ui/react';

import { glassmorphismContainer } from '$styles/tokens';

import { Tech, TechProps } from './tech';

interface TechCardProps extends CenterProps {
  name: string;
  direction?: 'vertical' | 'horizontal';
  colored: boolean;
  techProps?: Omit<TechProps, 'name'>;
  textProps?: TextProps;
  disableGlassmorphism?: boolean;
}

export function TechCard({
  name,
  colored,
  techProps,
  textProps,
  disableGlassmorphism = false,
  direction = 'horizontal',
  ...props
}: TechCardProps) {
  return (
    <Center
      cursor="pointer"
      bg="black"
      p="2"
      px="4"
      h={direction === 'horizontal' ? '60px' : 'auto'}
      minW={direction === 'horizontal' ? 'auto' : '100px'}
      minH={direction === 'horizontal' ? 'auto' : '100px'}
      transition="0.2s ease-in"
      flexDirection={direction === 'horizontal' ? 'row' : 'column'}
      color="white"
      sx={!disableGlassmorphism ? glassmorphismContainer() : props.sx}
      _hover={{
        boxShadow: 'red',
      }}
      {...props}
    >
      <Tech
        name={name}
        colored={colored}
        fontSize="3xl"
        bottomGap
        {...techProps}
      />

      <Text
        ml={direction === 'horizontal' ? '4' : '0'}
        fontWeight="bold"
        textTransform="uppercase"
        textAlign="center"
        fontSize="small"
        {...textProps}
      >
        {name}
      </Text>
    </Center>
  );
}
