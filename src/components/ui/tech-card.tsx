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
        boxShadow: '5px 5px 30px rgba(255, 0, 0, 0.5)',
      }}
    >
      <Tech name={name} colored={colored} bottomGap fontSize="3xl" />

      <Text fontWeight="bold" fontSize="small" textTransform="uppercase">
        {name}
      </Text>
    </Center>
  );
}
