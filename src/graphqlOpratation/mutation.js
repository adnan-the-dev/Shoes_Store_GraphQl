import { gql } from "@apollo/client";

export const SIGNUP_USER = gql`
  mutation createUser($userNew: UserInput!) {
    user: singUpUser(userNew: $userNew) {
      username
      password
      email
      postalCode
      street
      city
      state
      country
    }
  }
`;
