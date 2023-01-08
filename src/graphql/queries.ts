import { gql } from 'graphql-request';

export const GET_LANGUAGES = gql`
  query GetLanguages {
    language {
      names
    }
  }
`;
