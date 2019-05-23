import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const allTeamsQuery = gql`
  {
    allTeams {
      id
      name
      channels {
        id
        name
      }
    }
  }
`;
