import { ComponentStyleConfig } from '@chakra-ui/react';

export const Badge: ComponentStyleConfig = {
  defaultProps: {
    colorScheme: 'brand',
    variant: 'solid',
  },

  baseStyle: {
    rounded: 'full',
  },

  variants: {
    solid: {
      p: '2',
      bg: 'brand.alpha.200',
      color: 'brand.500',
      fontWeight: '600',
    },
  },
};
