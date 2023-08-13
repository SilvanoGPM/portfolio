import { Center, Text } from '@chakra-ui/react';

import { glassmorphismContainer } from '$styles/tokens';

import { Tech } from './tech';

interface TechCardProps {
  name: string;
  colored: boolean;
}

export function TechCard({ name, colored }: TechCardProps) {
  return (
    <Center
      cursor="pointer"
      bg="black"
      p="2"
      px="4"
      h="60px"
      transition="0.2s ease-in"
      color="white"
      sx={glassmorphismContainer()}
      _hover={{
        boxShadow: 'red',
      }}
    >
      <Tech name={name} colored={colored} fontSize="3xl" />

      <Text
        ml="4"
        fontWeight="bold"
        textTransform="uppercase"
        textAlign="center"
        fontSize="small"
      >
        {name}
      </Text>
    </Center>
  );
}
