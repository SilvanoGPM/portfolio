import { Flex, Spacer } from '@chakra-ui/react';

import { MyAvatar } from './MyAvatar';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { glassmorphismContainer } from '$styles/tokens';

export function Sidebar() {
  return (
    <Flex
      bg="background.400"
      w="400px"
      minH="100vh"
      direction="column"
      justify="space-between"
      py="4"
      sx={glassmorphismContainer({ bg: 'backgroundAlpha.600', blur: '10px' })}
    >
      <MyAvatar />
      <Navbar />
      <Footer />
    </Flex>
  );
}
