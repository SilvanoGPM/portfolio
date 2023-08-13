import {
  ApiIcon,
  MobileIcon,
  OtherIcon,
  WebIcon,
} from '$components/chakra/icons';

export const categories = {
  web: {
    icon: WebIcon,
    name: 'Site',
  },

  api: {
    icon: ApiIcon,
    name: 'API',
  },

  other: {
    icon: OtherIcon,
    name: 'Software',
  },

  mobile: {
    icon: MobileIcon,
    name: 'Aplicativo',
  },
};
