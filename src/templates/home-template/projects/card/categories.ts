import { ApiIcon, OtherIcon, WebIcon } from '$components/chakra/icons';

export const categories = {
  web: {
    Icon: WebIcon,
    color: 'teal.400',
    text: 'Website',
  },

  api: {
    Icon: ApiIcon,
    color: 'green.400',
    text: 'API',
  },

  other: {
    Icon: OtherIcon,
    color: 'purple.700',
    text: 'Software',
  },

  mobile: {
    Icon: OtherIcon,
    color: 'pink.300',
    text: 'Aplicativo',
  },
};
