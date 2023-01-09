import { Flex } from '@chakra-ui/react';

import { Category } from '..';
import { SelectButton } from './select-button';

const buttons: Array<{ value: Category; label: string }> = [
  { value: 'all', label: 'Todos' },
  { value: 'web', label: 'Sites' },
  { value: 'api', label: 'APIs' },
  { value: 'mobile', label: 'Aplicativos' },
  { value: 'other', label: 'Outros' },
];

interface FilterOptionsProps {
  value: string;
  setValue: (value: Category) => void;
}

export function FilterOptions({ value, setValue }: FilterOptionsProps) {
  return (
    <Flex gap="1rem" wrap="wrap">
      {buttons.map((button) => (
        <SelectButton
          key={button.value}
          value={button.value}
          actualValue={value}
          onClick={() => setValue(button.value)}
        >
          {button.label}
        </SelectButton>
      ))}
    </Flex>
  );
}
