import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

import {
  As,
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputProps as ChakraInputProps,
  Icon,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
  formControlProps?: FormControlProps;
  icon?: As;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error, formControlProps, icon, ...props },
  ref,
) => {
  return (
    <FormControl flex="1" {...formControlProps} isInvalid={Boolean(error)}>
      {Boolean(label) && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <InputGroup>
        {icon && (
          <InputLeftElement pointerEvents="none">
            {<Icon as={icon} color="brand.500" />}
          </InputLeftElement>
        )}

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
      </InputGroup>

      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef<HTMLInputElement, InputProps>(InputBase);
