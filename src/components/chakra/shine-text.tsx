import {
  keyframes,
  Text,
  TextProps,
  usePrefersReducedMotion,
} from '@chakra-ui/react';

const textShine = keyframes`
  from { background-position: 100%; }
  to { background-position: 0%; }
`;

export function ShineText(props: TextProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${textShine} 5s ease-in-out infinite alternate`;

  return (
    <Text animation={animation} bgSize="500% auto" bgClip="text" {...props} />
  );
}
