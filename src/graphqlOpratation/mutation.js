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

export const PLACE_ORDER = gql`
mutation createOrder($orderPlace:PlaceOrderInput!){
  placeOrder(orderPlace:$orderPlace){
    userName
    userId
    status
    subTotal
    items{
      itemId
      quantity
      size
      itemPrice
      itemImage
      itemName
    }
  }
}
 `