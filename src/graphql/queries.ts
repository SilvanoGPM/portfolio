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

export const FIND_PROJECTS = gql`
  query findProjects($first: IntType, $skip: IntType, $category: String) {
    allProjects(
      first: $first
      skip: $skip
      filter: { category: { eq: $category } }
    ) {
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

    _allProjectsMeta(filter: { category: { eq: $category } }) {
      count
    }
  }
`;

export const GET_PROJECT = gql`
  query getProject($slug: String) {
    project(filter: { slug: { eq: $slug } }) {
      name
      description
      category
      repository
      url
      thumbnail {
        url
      }
      techs
    }
  }
`;
