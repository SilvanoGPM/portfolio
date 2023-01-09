import {
  ChakraUiIcon,
  ExpoIcon,
  StyledComponentsIcon,
} from '$components/chakra/icons';

export const iconsTech = {
  chakra: { Icon: ChakraUiIcon, bg: 'teal.400', rounded: 'full' },

  expo: { Icon: ExpoIcon, color: 'currentColor' },

  'styled-components': {
    Icon: StyledComponentsIcon,
    color: 'pink.300',
    fontSize: '4xl',
  },
};
