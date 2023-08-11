import { Category } from '.';

import { categories } from './categories';

interface CategoryProps {
  category: Category;
}

export function CategoryIcon({ category }: CategoryProps) {
  const Icon = categories[category];

  return <Icon color="brand.500" fontSize="xl" />;
}
