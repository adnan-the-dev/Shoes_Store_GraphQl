import { gql } from "@apollo/client";

export const GET_SINGLE_PRODUCTS = gql`
query singleProduct($prodcutid:ID!){
    singleProduct(_id:$prodcutid){
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