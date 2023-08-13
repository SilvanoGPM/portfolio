import { Box, Flex, Icon, Tooltip, Text, Button } from '@chakra-ui/react';
import { AiFillEye, AiOutlineClockCircle } from 'react-icons/ai';
import { Link } from '@chakra-ui/next-js';

import { ExternalLink } from '$components/chakra/external-link';
import { glassmorphismContainer } from '$styles/tokens';
import tabnewsImg from '$assets/tabnews.png';
import { Image } from '$components/chakra/image';

export interface Post {
  id: string;
  title: string;
  description: string;
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
      maxW="400px"
      minH="400px"
      direction="column"
      overflow="hidden"
      transition="0.2s ease-in-out"
      sx={glassmorphismContainer()}
      _hover={{
        boxShadow: 'red',
      }}
    >
      <Flex flex="1" p="4" align="start" gap="0.5rem" direction="column">
        <Flex gap="0.5rem" color="white">
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

          <Tooltip label={post.createdAt} hasArrow bg="brand.500" color="white">
            <Box>
              <Icon as={AiOutlineClockCircle} fontSize="4xl" />
            </Box>
          </Tooltip>
        </Flex>

        <Link
          href={link}
          key={post.slug}
          fontSize={['xl', '2xl']}
          fontWeight="bold"
          color="white"
          aria-label="Saiba mais sobre este post"
        >
          {post.title}
        </Link>

        <Text>{post.description}</Text>
      </Flex>

      <Link href={link} aria-label="Saiba mais sobre este post" w="full">
        <Button rightIcon={<Icon as={AiFillEye} />} w="full">
          Visualizar post
        </Button>
      </Link>
    </Flex>
  );
}
