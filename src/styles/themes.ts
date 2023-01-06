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
      '600': '#080808',
      '500': '#111111',
      '400': '#282828',
    },

    backgroundAlpha: {
      '900': 'rgba(17, 17, 17, 0.9)',
      '800': 'rgba(17, 17, 17, 0.8)',
      '700': 'rgba(17, 17, 17, 0.7)',
      '600': 'rgba(17, 17, 17, 0.6)',
      '500': 'rgba(17, 17, 17, 0.5)',
      '400': 'rgba(17, 17, 17, 0.4)',
      '300': 'rgba(17, 17, 17, 0.3)',
      '200': 'rgba(17, 17, 17, 0.2)',
      '100': 'rgba(17, 17, 17, 0.1)',
    },
  },

  fonts: {
    heading: 'Titillium Web',
    body: 'Titillium Web',
  },

  styles: {
    global: {
      body: {
        bgImage: 'url(/bg.jpg)',
        bgPos: 'center',
        bgSize: 'cover',
        bgColor: 'background.500',
        color: 'white',
      },
    },
  },
});
