import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

import { glassmorphismContainer } from '$styles/tokens';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error, ...props },
  ref,
) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
      {Boolean(label) && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        ref={ref}
        id={name}
        name={name}
        borderRadius="none"
        border="2px"
        borderColor="brand.300"
        focusBorderColor="brand.700"
        variant="filled"
        size="lg"
        bg="background.300"
        _hover={{ bg: 'background.400' }}
        sx={glassmorphismContainer({ bg: '.100' })}
        {...props}
      />

      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef<HTMLInputElement, InputProps>(InputBase);
