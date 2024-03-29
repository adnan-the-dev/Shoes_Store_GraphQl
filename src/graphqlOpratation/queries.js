import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS =gql`
query getAllShoesProducts{
    allShoesProduct{
      _id
      productname
      mindetail
      fulldetail
      catagory
      price
      qunty
      pay
      sizes
      images
    }
  }
`

export const GET_SINGLE_PRODUCTS = gql`
  query singleProduct($prodcutid: ID!) {
    singleProd(_id: $prodcutid) {
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
`;