import React, { useEffect, useState } from "react";
import {
  CartImage,
  CartTextBox,
  MainBox,
  MainDeleteBox,
  PendinBoxBtn,
  SecondBox,
  SecondCartItem,
  TagBox,
  Text,
} from "./styled-component";
import { Box, TextField } from "@mui/material";
import { MdDelete } from "react-icons/md";
import runShoes from "../../assets/runShoes.webp";
import { category } from "../arrayComponent/Array";
import { completeOrders } from "../../api/orders/orders";

export const CompleteOrders = () => {
  const [data, setData] = useState([]);
  const getAllOrdersApi = async () => {
    const res = await completeOrders();
    setData(res.data.result);
  };
  useEffect(() => {
    getAllOrdersApi();
  }, []);

  return (
    <>
      <MainBox>
        {data.map((order) => {
          return order.items.map((item) => (
            <SecondCartItem>
              <CartImage component="img" src={item.itemImage} alt="" />
              <CartTextBox>
                <TagBox>
                  <Text>{item.itemName}</Text>
                  <Text isActive={true}>Price : {item.itemPrice} Rs</Text>
                </TagBox>
                <MainDeleteBox>
                  <Box>
                    <SecondBox>
                      <Text isActive={true}>Size: {item.size}</Text>
                      <Text
                        style={{
                          color: "rgb(86 90 81)",
                          fontWeight: "normal",
                          fontSize: "1rem",
                        }}
                        isLeft={true}
                      >
                        Quantity:{item.quantity}
                      </Text>
                    </SecondBox>
                  </Box>
                  <Box>
                    <PendinBoxBtn status={true}>{order.status}</PendinBoxBtn>
                  </Box>
                </MainDeleteBox>
              </CartTextBox>
            </SecondCartItem>
          ));
        })}
      </MainBox>
    </>
  );
};
