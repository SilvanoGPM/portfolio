import { Box, Center } from '@chakra-ui/react';

import { DefaultLayout } from '$components/layout/default-layout';
import { Lottie } from '$components/ui/lottie';
import notFound404Animation from '$assets/lottie/not-found-404.json';

export default function NotFound() {
  return (
    <DefaultLayout>
      <Center
        as="section"
        flexDirection="column"
        h={{ base: '80vh', lg: '55vh' }}
        w="full"
        mt="16"
      >
        <Box maxH="400px">
          <Lottie animation={notFound404Animation} />
        </Box>
      </Center>
    </DefaultLayout>
  );
}
