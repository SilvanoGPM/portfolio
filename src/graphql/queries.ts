import { gql } from 'graphql-request';

export const GET_LANGUAGES_AND_LATEST_PROJECTS = gql`
  query GetLanguagesAndLatestProjects($first: IntType) {
    language {
      names
    }

    allProjects(first: $first) {
      slug
      name
      category
      url
      repository
      techs
      thumbnail {
        url
      }
    }
  }
`;
