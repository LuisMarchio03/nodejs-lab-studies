import { gql } from "@apollo/client";

export const GET_USERS = gql`
  {
    users {
      name
      email
      posts
    }
  }
`;

export const GET_USER = gql`
  query getUser($email: String!) {
    {
      user(email: $email) {
        name
        email
      }
  }
  }
`;
