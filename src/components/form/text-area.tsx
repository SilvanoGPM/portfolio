import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
} from '@chakra-ui/react';

import { glassmorphismContainer } from '$styles/tokens';

interface TextareaProps extends ChakraTextareaProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const TextareaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = ({ name, label, error, ...props }, ref) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
      {Boolean(label) && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraTextarea
        ref={ref}
        id={name}
        name={name}
        border="2px"
        borderColor="brand.300"
        focusBorderColor="brand.500"
        borderRadius="none"
        variant="filled"
        size="lg"
        bg="background.300"
        _hover={{ bg: 'background.400' }}
        sx={glassmorphismContainer()}
        {...props}
      />

      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  TextareaBase,
);
