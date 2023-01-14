import { StackProps, VStack } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';

import { linkAnimation } from '$/styles/tokens';
import { Replace } from '$utils/replace';

export function Markdown({
  children,
  ...props
}: Replace<StackProps, { children: string }>) {
  return (
    <VStack
      fontSize="2xl"
      align="start"
      {...props}
      sx={{
        strong: { color: 'brand.500' },
        'ol, ul': {
          pl: '2.5rem',
        },
        a: {
          ...linkAnimation,
          '&': {
            color: 'brand.500',
            ...linkAnimation['&'],
          },
        },
      }}
    >
      <ReactMarkdown>{children}</ReactMarkdown>
    </VStack>
  );
}
