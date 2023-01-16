import { SystemStyleObject } from '@chakra-ui/react';

import { linkAnimation, thinScrollbar } from '$/styles/tokens';

export const tagStyles: SystemStyleObject = {
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

  pre: {
    maxWidth: 'full',
    width: 'full',

    '.codeStyle': {
      ...thinScrollbar,
      fontSize: '1rem !important',
    },
  },

  'h1, h2, h3, h4, h5, h6': {
    fontWeight: 'bold',
    mt: '2rem !important',
  },
};
