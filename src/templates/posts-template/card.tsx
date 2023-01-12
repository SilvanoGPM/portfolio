import { Box, Flex, Icon, Tooltip, IconButton } from '@chakra-ui/react';
import { AiFillEye, AiOutlineClockCircle } from 'react-icons/ai';

import { ExternalLink } from '$components/chakra/external-link';
import { Link } from '$components/chakra/internal-link';
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
      sx={glassmorphismContainer({ bg: 'backgroundAlpha.100' })}
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
          animated={false}
        >
          {post.title}
        </Link>
      </Flex>

      <Box w={{ base: 'full', md: '20%' }} h="full">
        <Link href={link} animated={false}>
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
