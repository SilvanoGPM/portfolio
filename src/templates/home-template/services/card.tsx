import {
  Box,
  Center,
  ComponentWithAs,
  Flex,
  Heading,
  IconProps,
  Text,
} from '@chakra-ui/react';

import { glassmorphismContainer } from '$styles/tokens';
import { ScrollButton } from '$components/ui/scroll-button';
import { Image } from '$components/chakra/image';
import { CONTACT } from '$shared/sections';

interface CardProps {
  Icon: ComponentWithAs<'svg', IconProps>;
  more: string;
  image: string;
  title: string;
  description: string;
}

export function Card({ Icon, title, image, more, description }: CardProps) {
  function beforeScroll() {
    const $textarea = document.querySelector('#message') as HTMLTextAreaElement;

    $textarea.value = more;
  }

  return (
    <Flex
      role="group"
      cursor="pointer"
      flex="1"
      display="flex"
      justify="space-between"
      align="center"
      minW="250px"
      gap="1rem"
      direction="column"
      h="450px"
      borderBottomColor="transparent"
      borderBottomWidth="4px"
      transition="0.2s ease-in"
      sx={glassmorphismContainer({ bg: 'backgroundAlpha.100' })}
      _hover={{
        borderColor: 'brand.500',
        boxShadow: '5px 5px 30px rgba(255, 0, 0, 0.5)',
      }}
    >
      <Box
        w="full"
        pos="relative"
        borderBottomColor="brand.500"
        borderBottomWidth="4px"
      >
        <Image
          src={image}
          alt={title}
          minH="150px"
          w="full"
          filter="grayscale(50%) brightness(50%)"
          objectFit="cover"
          transition="0.2s ease-in-out"
          _groupHover={{
            filter: 'grayscale(0%) brightness(100%)',
          }}
        />

        <Box
          pos="absolute"
          bottom="-8"
          left="50%"
          transform="translateX(-50%)"
          bg="white"
          boxShadow="5px 5px 30px rgba(255, 0, 0, 0.5)"
          rounded="full"
          p="4"
        >
          <Icon color="brand.500" fontSize="4xl" />
        </Box>
      </Box>

      <Center flexDirection="column" flex="1" px="4" mt="8">
        <Heading as="h3" fontSize="3xl" textTransform="uppercase">
          {title}
        </Heading>

        <Text fontSize="lg" textAlign="center">
          {description}
        </Text>

        <ScrollButton
          dataScroll={CONTACT}
          beforeScroll={beforeScroll}
          mt="auto"
          mb="8"
          variant="solid"
        >
          Saber mais
        </ScrollButton>
      </Center>
    </Flex>
  );
}
