import { ParsedUrlQuery } from 'querystring';
import { Category } from '.';

export function getQueryParams(query: ParsedUrlQuery) {
  console.log(query);

  let category = String(query.category) || 'all';

  if (category === 'undefined') {
    category = 'all';
  }

  let page = Number.parseInt(String(query));

  if (isNaN(page) || page <= 0) {
    page = 1;
  }

  return { page, category: category as Category };
}
