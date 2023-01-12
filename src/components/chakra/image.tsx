import { type CSSProperties } from 'react';
import NextImage from 'next/image';

import {
  Box,
  BoxProps,
  keyframes,
  useBoolean,
  usePrefersReducedMotion,
} from '@chakra-ui/react';

import { Replace } from '$utils/replace';

interface ImageProps
  extends Replace<Omit<BoxProps, 'fill'>, { objectFit?: string }> {
  src: string;
  alt: string;
  quality?: number;
}

export function Image({ src, alt, quality, objectFit, ...props }: ImageProps) {
  const [loadingImage, loadingControls] = useBoolean();
  const prefersReducedMotion = usePrefersReducedMotion();

  const shimmerAnimation = keyframes`
    from {
      background-position: -40rem 0;
    }
    to {
      background-position: 40rem 0;
    }
  `;

  const imageLoadingAnimation =
    !loadingImage || prefersReducedMotion
      ? undefined
      : `${shimmerAnimation} 1s linear infinite forwards`;

  const bgGradient = !loadingImage
    ? undefined
    : `linear(
                                                    to-r,
                                                    background.700 0%,
                                                    background.900,
                                                    background.700 40%,
                                                    background.900 100%
                                                  )`;

  const style = { objectFit, border: 'none' } as CSSProperties;

  return (
    <Box
      pos="relative"
      bgSize="80rem 14rem"
      animation={imageLoadingAnimation}
      bgGradient={bgGradient}
      border="none"
      {...props}
    >
      <NextImage
        src={src}
        alt={alt}
        quality={quality}
        fill
        style={style}
        onLoadingComplete={() => loadingControls.off()}
      />
    </Box>
  );
}
