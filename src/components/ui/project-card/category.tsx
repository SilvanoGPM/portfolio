import { Tooltip } from '@chakra-ui/react';
import { Category } from '.';

import { categories } from './categories';

interface CategoryProps {
  category: Category;
}

export function Category({ category }: CategoryProps) {
  const { Icon, text, color } = categories[category];

  return (
    <Tooltip label={text} bg={color}>
      <Icon color={color} fontSize="4xl" />
    </Tooltip>
  );
}
