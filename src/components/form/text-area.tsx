import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

import {
  As,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  InputGroup,
  InputLeftElement,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
} from '@chakra-ui/react';

interface TextareaProps extends ChakraTextareaProps {
  name: string;
  label?: string;
  error?: FieldError;
  icon?: As;
}

const TextareaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = ({ name, label, error, icon, ...props }, ref) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
      {Boolean(label) && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <InputGroup>
        {icon && (
          <InputLeftElement pointerEvents="none">
            {<Icon as={icon} color="brand.500" />}
          </InputLeftElement>
        )}

        <ChakraTextarea
          ref={ref}
          id={name}
          name={name}
          border="0"
          borderBottom="1px"
          borderColor="brand.300"
          focusBorderColor="brand.500"
          borderRadius="none"
          variant="filled"
          size="lg"
          bg="transparent"
          rounded="none"
          pl="10"
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

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  TextareaBase,
);
