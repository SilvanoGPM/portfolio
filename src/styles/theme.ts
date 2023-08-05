import { extendTheme } from '@chakra-ui/react';

import { Button } from './components/button';
import { Heading } from './components/heading';
import { thinScrollbar } from './tokens';

export const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,

  components: {
    Button,
    Heading,
  },

  shadows: {
    red: '5px 5px 30px var(--chakra-colors-brand-alpha-500)',
  },

  colors: {
    brand: {
      '900': '#6b2222',
      '800': '#7d2727',
      '700': '#8f2d2d',
      '600': '#a13333',
      '500': '#b33939',
      '400': '#c34343',
      '300': '#ca5858',
      '200': '#d06d6d',
      '100': '#d78282',
      '50': '#dd9797',

      'alpha.900': 'rgba(179, 57, 57, 0.9)',
      'alpha.800': 'rgba(179, 57, 57, 0.8)',
      'alpha.700': 'rgba(179, 57, 57, 0.7)',
      'alpha.600': 'rgba(179, 57, 57, 0.6)',
      'alpha.500': 'rgba(179, 57, 57, 0.5)',
      'alpha.400': 'rgba(179, 57, 57, 0.4)',
      'alpha.300': 'rgba(179, 57, 57, 0.3)',
      'alpha.200': 'rgba(179, 57, 57, 0.2)',
      'alpha.100': 'rgba(179, 57, 57, 0.1)',
    },

    background: {
      '900': '#0a0a0a',
      '800': '#0b0b0b',
      '700': '#0d0d0d',
      '600': '#080808',
      '500': '#111111',
      '400': '#282828',
      '300': '#404040',
      '200': '#585858',
      '100': '#707070',

      'alpha.900': 'rgba(17, 17, 17, 0.9)',
      'alpha.800': 'rgba(17, 17, 17, 0.8)',
      'alpha.700': 'rgba(17, 17, 17, 0.7)',
      'alpha.600': 'rgba(17, 17, 17, 0.6)',
      'alpha.500': 'rgba(17, 17, 17, 0.5)',
      'alpha.400': 'rgba(17, 17, 17, 0.4)',
      'alpha.300': 'rgba(17, 17, 17, 0.3)',
      'alpha.200': 'rgba(17, 17, 17, 0.2)',
      'alpha.100': 'rgba(17, 17, 17, 0.1)',
    },
  },

  styles: {
    global: {
      html: {
        ...thinScrollbar,
      },

      body: {
        fontDisplay: 'swap',
        bgColor: 'background.500',
        color: 'gray.300',
        ...thinScrollbar,
      },
    },
  },
});
