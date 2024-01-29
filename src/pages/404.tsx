import { Box, Center } from '@chakra-ui/react';
import Head from 'next/head';

import { DefaultLayout } from '$components/layout/default-layout';
import { Lottie } from '$components/ui/lottie';
import notFound404Animation from '$assets/lottie/not-found-404.json';
import { Analytics } from '$components/analytics';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Página não encontrada | Silvano Marques</title>
      </Head>

      <Analytics />

      <DefaultLayout>
        <Center
          as="section"
          flexDirection="column"
          h={{ base: '80vh', lg: '80vh' }}
          w="full"
        >
          <Box maxH="400px">
            <Lottie
              animation={notFound404Animation}
              transform="auto"
              translateY={{ base: '0', lg: '-24' }}
            />
          </Box>
        </Center>
      </DefaultLayout>
    </>
  );
}
