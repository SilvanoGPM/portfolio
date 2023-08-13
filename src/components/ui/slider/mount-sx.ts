import { SystemStyleObject } from '@chakra-ui/react';

export interface MountSxParams {
  pagination?: SystemStyleObject;
  paginationBullet?: SystemStyleObject;
  paginationBulletActive?: SystemStyleObject;
  button?: SystemStyleObject;
  buttonNext?: SystemStyleObject;
  buttonBefore?: SystemStyleObject;
  buttonContent?: SystemStyleObject;
}

export function mountSx({
  pagination,
  paginationBullet,
  paginationBulletActive,
  button,
  buttonContent,
  buttonNext,
  buttonBefore,
}: MountSxParams = {}) {
  const swiperPagination = pagination ?? { padding: '0 12px' };

  const swiperPaginationBullet = {
    background: 'white',
    width: '1rem',
    height: '1rem',
    borderRadius: '0.5rem',
    opacity: '0.3',
    ...paginationBullet,
  };

  const swiperPaginationBulletActive = {
    background: 'brand.500',
    opacity: '0.5',
    ...paginationBulletActive,
  };

  const swiperButton = {
    color: 'brand.500',
    borderColor: 'brand.500',
    borderWidth: '1px',
    borderRadius: '50%',
    height: '50px',
    position: 'absolute',
    top: '30px',
    width: '50px',
    ...button,

    '&::after': {
      fontSize: 'md',
      buttonContent,
    },
  };

  return {
    '.swiper-pagination': {
      ...swiperPagination,

      '&-bullet': {
        ...swiperPaginationBullet,

        '&-active': swiperPaginationBulletActive,
      },
    },
    '.swiper-button': {
      '&-next': { ...swiperButton, ...buttonNext },
      '&-prev': { ...swiperButton, ...buttonBefore },
    },
  };
}
