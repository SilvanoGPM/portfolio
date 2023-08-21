import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Category } from '.';

export function usePagination() {
  const router = useRouter();

  useEffect(() => {
    if (router.query.page) {
      let page = parseInt(String(router.query.page));

      if (isNaN(page) || page <= 0) {
        page = 1;
      }

      setPage(page);
    }

    if (router.query.category && typeof router.query.category === 'string') {
      setCategory(router.query.category as Category);
    }
  }, [router.query]);

  const [category, setCategory] = useState<Category>('all');
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page, category]);

  const updateQuery = useCallback(
    (page: number, category: Category) => {
      router.push({
        pathname: router.pathname,
        query: { page, category },
      });
    },
    [router],
  );

  const handleChangeCategory = useCallback(
    (category: Category) => {
      setPage(1);
      setCategory(category);
      updateQuery(1, category);
    },
    [updateQuery],
  );

  const handlePageChange = useCallback(
    (page: number) => {
      setPage(page);
      updateQuery(page, category);
    },
    [updateQuery, category],
  );

  return {
    page,
    category,
    setPage: handlePageChange,
    setCategory: handleChangeCategory,
  };
}
