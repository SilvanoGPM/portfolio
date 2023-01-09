import { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
  defaultProps: {
    colorScheme: 'brand',
  },

  variants: {
    solid: ({ colorScheme }) => ({
      color: colorScheme === 'brand' ? 'white' : 'inherit',
      border: '2px solid',
      borderColor: `${colorScheme}.500`,
      transition: '0.2s filter',
      rounded: 'none',
      _disabled: {
        opacity: 0.5,
        bg: `${colorScheme}.500`,
        _hover: { filter: 'brightness(1)' },
      },
      _hover: { filter: 'brightness(0.9)' },
    }),

    outline: ({ colorScheme }) => ({
      border: '2px solid',
      borderColor: `${colorScheme}.500`,
      rounded: 'none',
      color: `${colorScheme}.500`,
      transition: '0.2s ease-in-out',
      bg: 'transparent',
      _hover: {
        bg: `${colorScheme}.500`,
        color: 'white',
      },
      _active: {
        bg: `${colorScheme}.500`,
        color: 'white',
      },
    }),
  },
};
