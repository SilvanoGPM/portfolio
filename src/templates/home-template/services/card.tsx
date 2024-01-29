import {
  Center,
  ComponentWithAs,
  Flex,
  Heading,
  IconProps,
  Text,
} from '@chakra-ui/react';

import { glassmorphismContainer } from '$styles/tokens';
import { ScrollButton } from '$components/ui/scroll-button';
import { CONTACT } from '$shared/sections';
import { AiOutlinePlus } from 'react-icons/ai';
import { SlideFade } from '$components/ui/animations/slide-fade';
import { Fade } from 'react-awesome-reveal';

interface CardProps {
  Icon: ComponentWithAs<'svg', IconProps>;
  more: string;
  title: string;
  description: string;
  delay: number;
}

export function Card({ Icon, title, more, description, delay }: CardProps) {
  function beforeScroll() {
    const $textarea = document.querySelector('#message') as HTMLTextAreaElement;

    $textarea.value = more;
  }

  return (
    <SlideFade direction="up" delay={delay} style={{ flex: '1' }}>
      <Flex
        role="group"
        cursor="pointer"
        textAlign="start"
        flex="1"
        minW="250px"
        direction="column"
        h="300px"
        pt="4"
        sx={glassmorphismContainer()}
        transition="0.2s ease-in-out"
        _hover={{
          shadow: 'red',
          textDecor: 'none',
        }}
      >
        <Flex px="4" direction="column">
          <Fade delay={delay + 100}>
            <Flex align="center">
              <Center
                boxSize="50px"
                p="2"
                bg="brand.alpha.100"
                mr="4"
                rounded="md"
              >
                <Icon color="brand.500" fontSize="3xl" />
              </Center>

              <Heading as="h3" fontSize="3xl" textTransform="uppercase">
                {title}
              </Heading>
            </Flex>

            <Text fontSize="lg" mt="8" color="gray.300">
              {description}
            </Text>
          </Fade>
        </Flex>

        <ScrollButton
          dataScroll={CONTACT}
          beforeScroll={beforeScroll}
          maxW="full"
          mt="auto"
          rightIcon={<Icon as={AiOutlinePlus} fontSize="2xl" />}
          variant="solid"
        >
          Saber mais
        </ScrollButton>
      </Flex>
    </SlideFade>
  );
}
