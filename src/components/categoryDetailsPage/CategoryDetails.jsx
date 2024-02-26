import React, { useEffect, useState } from "react";
import {
  BrandNameBox,
  CardBox,
  CardBoxText,
  CardImage,
  CardText,
  CardTitle,
  CardsContainer,
  ChildBox,
  ChildCard,
  DecriptionSection,
  DiscoutTypo,
  MainBox,
  MainCardBox,
  Price,
  PriceSection,
  TagName,
  TextBox,
} from "./styled-component";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { IoSearch } from "react-icons/io5";
import { array } from "../arrayComponent/Array";
import { category } from "../arrayComponent/Array";
import { useParams } from "react-router-dom";
import { getProductData } from "../../api/signApi/signUpApi";
import { Link, NavLink } from "react-router-dom/dist";
import { useForm } from "react-hook-form";

export default function CategoryDetails() {
  const param = useParams();

  const [prodcuts, setProdcuts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [formDataPrice, setFormDataPrice] = useState({});
  const { register, handleSubmit } = useForm();

  const getDataApi = async () => {
    const res = await getProductData();
    setProdcuts(res.data.result);
  };
  const filteredProducts = prodcuts.filter(
    (prod) =>
      prod.catagory.toLowerCase() === param.code &&
      searchQuery
        .toLowerCase()
        .split(" ")
        .every((term) => {
          return prod?.productname?.toLowerCase().includes(term);
        }) &&
      (!formDataPrice.minNumber || formDataPrice.minNumber <= prod.price) &&
      (!formDataPrice.maxNumber || formDataPrice.maxNumber >= prod.price)
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const minMaxPriceFun = (data) => {
    const formData = {
      minNumber: data.minNumber,
      maxNumber: data.maxNumber,
    };
    setFormDataPrice(formData);
  };

  useEffect(() => {
    getDataApi();
  }, []);
  return (
    <>
      <MainBox>
        <ChildBox>
          <TextField
            onChange={handleSearchChange}
            placeholder="Search here"
            InputProps={{
              style: {
                borderRadius: "50px",
                width: "60rem",
                height: "2.7rem",
              },
            }}
          />
          <IoSearch style={{ fontSize: "25px", cursor: "pointer" }} />
        </ChildBox>
      </MainBox>

      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <BrandNameBox>
            <TagName>Brands</TagName>
            {array.map((item, i) => {
              return (
                <NavLink
                  to={`/products/${item.toLocaleLowerCase()}`}
                  style={{ textDecoration: "none" }}
                >
                  <TagName
                    key={i}
                    isActive={param.code !== item.toLocaleLowerCase()}
                  >
                    {item}
                  </TagName>
                </NavLink>
              );
            })}
          </BrandNameBox>
          <BrandNameBox>
            <TagName>Price filter</TagName>
            <TagName isActive={true}>min Price</TagName>
            <Box component="form" onSubmit={handleSubmit(minMaxPriceFun)}>
              <TextField
                type="number"
                {...register("minNumber")}
                placeholder="Min Price"
                InputProps={{
                  style: {
                    borderRadius: "0.5rem",
                    width: "75%",
                    marginLeft: "0.75rem",
                    height: "2.7rem",
                  },
                }}
              />
              <TagName sx={{ marginTop: "1rem" }} isActive={true}>
                max Price
              </TagName>
              <TextField
                type="number"
                {...register("maxNumber")}
                placeholder="Max Price"
                InputProps={{
                  style: {
                    borderRadius: "0.5rem",
                    width: "75%",
                    marginLeft: "0.75rem",
                    height: "2.7rem",
                  },
                }}
              />
              <Box style={{ padding: "0px 12px" }}>
                <Button
                  type="submit"
                  style={{
                    border: "1px solid",
                    fontWeight: "600",
                    color: "green",
                    marginTop: "1rem",
                  }}
                >
                  Filter
                </Button>
              </Box>
            </Box>
          </BrandNameBox>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={9} xl={9}>
          <MainCardBox>
            <ChildCard>
              <CardBoxText>
                <TextBox>{param.code.toUpperCase()}</TextBox>
                <TextBox colorBox={true}>Check our new product</TextBox>
              </CardBoxText>
            </ChildCard>

            <Grid container>
              {filteredProducts?.map((item) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CardsContainer>
                      <NavLink
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/cart/${item._id}`}
                      >
                        <Box
                          style={{
                            boxShadow: " rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
                            cursor: "pointer",
                          }}
                        >
                          <CardImage
                            component="img"
                            src={item.images[0]}
                            alt=""
                          />
                          <DecriptionSection>
                            <Box>
                              <CardTitle>{item.productname}</CardTitle>
                            </Box>
                            <CardText>{item.mindetail}</CardText>
                            <CardBox>
                              <PriceSection>
                                <Price setColor={true}>12$</Price>
                                <Price>{item.price}$</Price>
                              </PriceSection>
                              <DiscoutTypo>5%</DiscoutTypo>
                            </CardBox>
                          </DecriptionSection>
                        </Box>
                      </NavLink>
                    </CardsContainer>
                  </Grid>
                );
              })}
            </Grid>
          </MainCardBox>
        </Grid>
      </Grid>
    </>
  );
}

{
  /* <Grid container>
          {
            category.map((item)=>  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CardsContainer>
              <Box style={{boxShadow:' rgba(0, 0, 0, 0.15) 0px 3px 3px 0px'}}>
              <CardImage component='img' src={item.img} alt="" />
              <DecriptionSection>
              <Box>
                <CardTitle>CLOUDFOAM PURE SHOES</CardTitle>
              </Box>
              <CardText>Cloud White / Chalk White / Zero Metalic</CardText>
              <CardBox>
                <PriceSection>
                  <Price setColor={true}>12$</Price>
                  <Price>71.25$</Price>
                </PriceSection>
                <DiscoutTypo>5%</DiscoutTypo>
              </CardBox>
              </DecriptionSection>
              </Box>
            </CardsContainer>
          </Grid>
          )
          }
        
          
          
        </Grid> */
}
