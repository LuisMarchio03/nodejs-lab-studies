import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  {
    posts {
      title
      content
      published
    }
  }
`;

export const GET_POST = gql`
  query getPost($id: String!) {
    post(id: $id) {
      title
      content
      published
    }
  }
`;
