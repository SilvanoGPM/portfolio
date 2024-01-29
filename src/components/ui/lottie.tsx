import { Box, BoxProps } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

interface LottieProps extends BoxProps {
  animation: object;
  autoplay?: boolean;
  loop?: boolean;
  speed?: number;
}

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  {
    ssr: false,
  },
);

export function Lottie({
  animation,
  autoplay = true,
  loop = true,
  speed,
  ...props
}: LottieProps) {
  return (
    <Box {...props}>
      <Player autoplay={autoplay} loop={loop} src={animation} speed={speed} />
    </Box>
  );
}

export default Lottie;
