import { Badge, Box } from '@chakra-ui/react';
import { Category } from '.';
import { categories } from './categories';

interface CategoryProps {
  category: Category;
}

export function CategoryBadge({ category }: CategoryProps) {
  const { icon: CategoryIcon, name } = categories[category];

  return (
    <Badge display="flex" gap="1" alignItems="center">
      <CategoryIcon />
      <Box m="0">{name}</Box>
    </Badge>
  );
}
