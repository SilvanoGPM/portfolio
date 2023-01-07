interface GlassmorphismContainerProps {
  bg: string;
  blur?: string;
}

export function pngBorder(color: string) {
  return {
    img: {
      '-webkit-filter': `drop-shadow(1px 1px 0 ${color})
        drop-shadow(-1px -1px 0 ${color});
        filter: drop-shadow(1px 1px 0 ${color})
        drop-shadow(-1px -1px 0 ${color})`,
    },
  };
}

export const linkAnimation = {
  '&': {
    position: 'relative',
  },

  '&:hover': {
    color: 'brand.500',
    textDecoration: 'none',
  },

  '&::before': {
    content: "''",
    position: 'absolute',
    bottom: '0',
    left: '50%',
    right: '50%',
    display: 'block',
    width: '0',
    height: '2px',
    bg: 'brand.500',
    transition: '0.2s ease-in-out',
  },

  '&::after': {
    content: "''",
    position: 'absolute',
    bottom: '0',
    left: '50%',
    right: '50%',
    display: 'block',
    height: '2px',
    width: '0',
    bg: 'brand.500',
    transition: '0.2s ease-in-out',
  },

  '&:hover::before': {
    left: '0',
    width: '50%',
  },

  '&:hover::after': {
    right: '100%',
    width: '50%',
  },
};

export function glassmorphismContainer({
  bg,
  blur = '5px',
}: GlassmorphismContainerProps) {
  return {
    '&': {
      backdropFilter: `blur(${blur})`,
      boxShadow: 'dark-lg',
      bg,
    },
  };
}

export const thinScrollbar = {
  '&': { scrollbarWidth: 'thin' },
  '&::-webkit-scrollbar ': { width: '9px' },
  '&::-webkit-scrollbar-track': { bg: 'transparent' },
  '&::-webkit-scrollbar-thumb': {
    bg: 'rgba(255, 255, 255, 0.5)',
    border: 'transparent',
  },
};
