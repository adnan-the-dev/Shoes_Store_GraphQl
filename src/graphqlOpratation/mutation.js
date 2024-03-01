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
export const LOGIN_USER = gql`
  mutation loginUser($login: LoginUserInput!) {
    user: loginUser(userLogin: $login) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

