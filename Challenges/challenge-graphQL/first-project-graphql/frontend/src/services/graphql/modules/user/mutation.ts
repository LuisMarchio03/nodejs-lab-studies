import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  input UserInput {
    email: String!
    name: String!
  }

  mutation createUser($data: UserInput) {
    createUser($data: $data) {
      name
      email
    }
  }
`;
