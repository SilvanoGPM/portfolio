import { Box, Flex, Icon, Tooltip, IconButton } from '@chakra-ui/react';
import { AiFillEye, AiOutlineClockCircle } from 'react-icons/ai';
import { Link } from '@chakra-ui/next-js';

import { ExternalLink } from '$components/chakra/external-link';
import { glassmorphismContainer } from '$styles/tokens';
import tabnewsImg from '$assets/tabnews.png';
import { Image } from '$components/chakra/image';

interface Post {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
}

interface CardProps {
  post: Post;
}

export function Card({ post }: CardProps) {
  const link = `/posts/${post.slug}`;

  return (
    <Flex
      w="full"
      align="stretch"
      h={{ base: 'auto', md: '300px' }}
      direction={{ base: 'column', md: 'row' }}
      borderBottom="8px"
      borderBottomColor="brand.500"
      color="white"
      sx={glassmorphismContainer()}
    >
      <Flex
        flex="1"
        p="8"
        align="start"
        justify="space-between"
        gap="0.5rem"
        direction="column"
      >
        <Flex gap="0.5rem">
          <ExternalLink
            href={`https://www.tabnews.com.br/silvanomarques/${post.slug}`}
            animated={false}
            aria-label="Este mesmo post no TabNews"
          >
            <Image
              alt={post.title}
              src={tabnewsImg.src}
              width={10}
              height={10}
              quality={100}
            />
          </ExternalLink>

          <Tooltip label={post.createdAt} hasArrow>
            <Box>
              <Icon as={AiOutlineClockCircle} fontSize="4xl" />
            </Box>
          </Tooltip>
        </Flex>

        <Link
          href={link}
          key={post.slug}
          fontSize={['xl', '2xl', '3xl', '3xl', '4xl']}
          aria-label="Saiba mais sobre este post"
        >
          {post.title}
        </Link>
      </Flex>

      <Box w={{ base: 'full', md: '20%' }} h="full">
        <Link href={link} aria-label="Saiba mais sobre este post">
          <IconButton
            w="full"
            h="full"
            fontSize="4xl"
            aria-label="Visualizar post"
            icon={<Icon as={AiFillEye} />}
          />
        </Link>
      </Box>
    </Flex>
  );
}
