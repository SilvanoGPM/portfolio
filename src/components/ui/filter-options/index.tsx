import { ReactElement, ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

import { SelectButton } from './select-button';

interface FilterOptionsProps<T extends string> {
  value: string;
  buttons: Array<{ value: T; label: ReactNode; icon?: ReactElement }>;
  setValue: (value: T) => void;
}

export function FilterOptions<T extends string>({
  buttons,
  value,
  setValue,
}: FilterOptionsProps<T>) {
  return (
    <Flex gap="1rem" wrap="wrap">
      {buttons.map((button) => (
        <SelectButton
          key={button.value}
          value={button.value}
          actualValue={value}
          onClick={() => setValue(button.value)}
          leftIcon={button.icon}
        >
          {button.label}
        </SelectButton>
      ))}
    </Flex>
  );
}
