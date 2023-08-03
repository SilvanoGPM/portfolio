import { Center, Text } from '@chakra-ui/react';

import { glassmorphismContainer } from '$styles/tokens';

import { Tech } from './tech';

interface TechCardProps {
  name: string;
  colored: boolean;
}

const BIG_STRING_LENGTH = 15;

export function TechCard({ name, colored }: TechCardProps) {
  const isBigText = name.length >= BIG_STRING_LENGTH;

  return (
    <Center
      cursor="pointer"
      flexDir="column"
      bg="black"
      w="20"
      h="20"
      p="8"
      borderBottomColor="transparent"
      borderBottomWidth="4px"
      transition="0.2s ease-in"
      sx={glassmorphismContainer({ bg: 'backgroundAlpha.100' })}
      _hover={{
        borderColor: 'brand.500',
        boxShadow: 'red',
      }}
    >
      <Tech
        name={name}
        colored={colored}
        bottomGap={!isBigText}
        fontSize="3xl"
      />

      <Text
        fontWeight="bold"
        fontSize={isBigText ? 'x-small' : 'small'}
        textTransform="uppercase"
        textAlign="center"
      >
        {name}
      </Text>
    </Center>
  );
}
