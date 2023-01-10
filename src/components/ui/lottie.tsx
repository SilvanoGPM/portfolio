import { Box, BoxProps } from '@chakra-ui/react';
import { Player } from '@lottiefiles/react-lottie-player';

interface LottieProps extends BoxProps {
  animation: object;
  autoplay?: boolean;
  loop?: boolean;
  speed?: number;
}

export function Lottie({
  animation,
  autoplay = true,
  loop = true,
  ...props
}: LottieProps) {
  return (
    <Box {...props}>
      <Player autoplay={autoplay} loop={loop} src={animation} />
    </Box>
  );
}
