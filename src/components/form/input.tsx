import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormControlProps,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
  formControlProps?: FormControlProps;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error, formControlProps, ...props },
  ref,
) => {
  return (
    <FormControl flex="1" {...formControlProps} isInvalid={Boolean(error)}>
      {Boolean(label) && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        ref={ref}
        id={name}
        name={name}
        borderWidth="0"
        borderBottom="1px"
        borderColor="brand.300"
        focusBorderColor="brand.700"
        variant="filled"
        bg="transparent"
        rounded="none"
        _hover={{ bg: 'background.alpha.200' }}
        _placeholder={{
          color: 'brand.500',
          m: 0,
        }}
        {...props}
      />

      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef<HTMLInputElement, InputProps>(InputBase);
