import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS =gql`
query getAllShoesProducts{
    allShoesProduct{
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