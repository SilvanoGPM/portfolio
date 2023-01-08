import { request as graphqlRequest, Variables } from 'graphql-request';
import { RequestDocument } from 'graphql-request/dist/types';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';

// eslint-disable-next-line
export function request<TDocument = any>(
  document: RequestDocument | TypedDocumentNode<TDocument, Variables>,
  variables?: Variables,
) {
  return graphqlRequest<TDocument, Variables>(
    'https://graphql.datocms.com/',
    document,
    variables,
    {
      Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  );
}
