import { useBreakpointValue } from '@chakra-ui/react';

export function useScreenVersion(option: 'SM' | 'MD' | 'LG') {
  const value = useBreakpointValue(
    {
      base: 'SM',
      sm: 'SM',
      md: 'MD',
      lg: 'LG',
    },
    { ssr: false },
  );

  return value === option;
}
