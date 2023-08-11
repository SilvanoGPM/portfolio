import { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
  defaultProps: {
    colorScheme: 'brand',
  },

  baseStyle: {
    rounded: 'lg',
  },

  variants: {
    outline: {
      bg: 'brand.alpha.100',
      borderColor: 'brand.alpha.300',
      color: 'brand.500',
      fontWeight: '600',

      _hover: {
        bg: 'brand.alpha.200',
        borderColor: 'brand.alpha.300',
      },

      _active: {
        bg: 'brand.alpha.300',
        borderColor: 'brand.alpha.400',
      },
    },
  },
};
