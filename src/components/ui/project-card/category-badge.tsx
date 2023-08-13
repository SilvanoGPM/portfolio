import { Badge, Box, Center } from '@chakra-ui/react';
import { Category } from '.';
import { categories } from './categories';

interface CategoryProps {
  category: Category;
}

export function CategoryBadge({ category }: CategoryProps) {
  const { icon: CategoryIcon, name } = categories[category];

  return (
    <Badge>
      <Center>
        <CategoryIcon />
        <Box ml="2">{name}</Box>
      </Center>
    </Badge>
  );
}
