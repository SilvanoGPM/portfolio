import { Badge, BadgeProps, Box } from '@chakra-ui/react';
import { Category } from '.';
import { categories } from './categories';

interface CategoryProps extends BadgeProps {
  category: Category;
}

export function CategoryBadge({ category, ...props }: CategoryProps) {
  const { icon: CategoryIcon, name } = categories[category];

  return (
    <Badge display="flex" gap="1" alignItems="center" {...props}>
      <CategoryIcon />
      <Box m="0">{name}</Box>
    </Badge>
  );
}
