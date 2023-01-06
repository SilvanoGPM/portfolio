import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
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
    },

    background: {
      '500': '#111111',
    },
  },

  fonts: {
    heading: 'Titillium Web',
    body: 'Titillium Web',
  },

  styles: {
    global: {
      body: {
        bg: 'background.500',
        color: '#eee',
      },
    },
  },
});
