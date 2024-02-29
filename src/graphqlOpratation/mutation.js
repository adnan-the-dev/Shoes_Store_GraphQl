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
`
export const LOGIN_USER = gql`
mutation loginUser($login:LoginUserInput!){
  user:loginUser(userLogin:$login){
   token
  }
}
`
export const GET_SINGLE_PRODUCTS =gql`
query singleProduct($prodcutid:ID!){
  singleProduct(_id:$prodcutid){
    _id
    productname
    mindetail
    fulldetail
    catagory
    pay
    price
    images
    sizes
  }
}
`