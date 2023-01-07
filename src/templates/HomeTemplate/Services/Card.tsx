import {
  ComponentWithAs,
  Flex,
  Heading,
  IconProps,
  Text,
} from '@chakra-ui/react';

import { glassmorphismContainer } from '$styles/tokens';

interface CardProps {
  Icon: ComponentWithAs<'svg', IconProps>;
  title: string;
  description: string;
}

export function Card({ Icon, title, description }: CardProps) {
  return (
    <Flex
      cursor="pointer"
      flex="1"
      minW="250px"
      gap="1rem"
      direction="column"
      h="400px"
      px="4"
      py="8"
      borderBottomColor="transparent"
      borderBottomWidth="4px"
      transition="0.2s ease-in"
      sx={glassmorphismContainer({ bg: 'backgroundAlpha.100' })}
      _hover={{
        borderColor: 'brand.500',
        boxShadow: '5px 5px 30px rgba(255, 0, 0, 0.5)',
      }}
    >
      <Icon color="brand.500" fontSize="7xl" />

      <Heading as="h3" fontSize="3xl" textTransform="uppercase">
        {title}
      </Heading>

      <Text fontSize="xl">{description}</Text>
    </Flex>
  );
}
