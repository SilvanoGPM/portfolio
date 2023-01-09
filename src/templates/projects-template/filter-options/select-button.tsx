import { Replace } from '$utils/replace';
import { Button, ButtonProps } from '@chakra-ui/react';

interface SelectButtonProps extends Replace<ButtonProps, { value: string }> {
  actualValue: string;
}

export function SelectButton({
  actualValue,
  value,
  children,
  onClick,
  ...props
}: SelectButtonProps) {
  const active = actualValue === value;

  return (
    <Button variant={active ? 'solid' : 'outline'} onClick={onClick} {...props}>
      {children}
    </Button>
  );
}
