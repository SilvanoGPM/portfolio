import { glassmorphismContainer } from '$styles/tokens';
import { Center, Text } from '@chakra-ui/react';

interface TechCardProps {
  name: string;
  colored: boolean;
}

export function TechCard({ name, colored }: TechCardProps) {
  const coloredClass = colored ? 'colored' : '';

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
      <Text fontSize="3xl">
        <i
          className={`devicon-${name.toLocaleLowerCase()}-plain ${coloredClass}`}
        ></i>
      </Text>

      <Text fontWeight="bold" fontSize="small" textTransform="uppercase">
        {name}
      </Text>
    </Center>
  );
}
