import banner from "../../assets/banner.webp";
import { Box, Grid } from "@mui/material";
import {
  BoxText,
  CardBox,
  CardImage,
  CardText,
  CardTitle,
  CardsContainer,
  CarouselBox,
  CarouselBoxText,
  CarouselImage,
  CarouselTypography,
  CatagoryBox,
  CategoryTag,
  ChildCatagoryBox,
  DecriptionSection,
  DiscoutBox,
  DiscoutText,
  DiscoutTypo,
  ImageBox,
  MainCardSection,
  MainSilderBox,
  NewProductSection,
  Price,
  PriceSection,
  SilderTag,
  TypographyBox,
  TypographyText,
  ViewAllBox,
} from "./styled-component";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom/dist";
import { Loader } from "../loaderPage/Loader";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../../graphqlOpratation/queries";

export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
  // if (loading) return <h1>Loading...</h1>;

  if (error) {
    console.log(error.message);
  }
  // console.log(data.allShoesProduct);

  const arr = data?.allShoesProduct?.map((item) => ({
    cat: item.catagory,
    img: item.images[0],
  }));
  const unique = [...new Set(arr?.map((item) => item.cat))];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Box>
        <img width="100%" src={banner} alt="" />
      </Box>
      {loading ? (
        <Loader />
      ) : (
        <>
          <CatagoryBox>
            {unique?.map((item, i) => {
              const imgUrl = arr?.find((ob) => ob.cat == item);
              return (
                <ChildCatagoryBox key={i}>
                  <ImageBox component="img" src={imgUrl?.img} alt="" />
                  <CategoryTag>
                    <NavLink
                      to={`/products/${item.toLocaleLowerCase()}`}
                      style={{ textDecoration: "none" }}
                    >
                      <TypographyBox sx={{ color: "#000" }}>
                        {item}
                      </TypographyBox>
                    </NavLink>
                  </CategoryTag>
                </ChildCatagoryBox>
              );
            })}
          </CatagoryBox>

          {/* *********Silder Section************ */}

          <MainSilderBox>
            <SilderTag>By Adidas</SilderTag>
            <CarouselBox>
              <Carousel style={{ textAlign: "center" }} responsive={responsive}>
                {data?.allShoesProduct?.map((item, i) => {
                  return (
                    <Box key={i}>
                      <NavLink
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/cart/${item._id}`}
                      >
                        <CarouselImage
                          component="img"
                          src={item?.images[0]}
                          alt=""
                        />

                        <CarouselBoxText>
                          <CarouselTypography>
                            {item.productname}
                          </CarouselTypography>
                          <DiscoutBox>
                            <DiscoutText isActive={true}>
                              Rs:{item.price}
                            </DiscoutText>
                            <DiscoutText>15% off</DiscoutText>
                          </DiscoutBox>
                        </CarouselBoxText>
                      </NavLink>
                    </Box>
                  );
                })}
              </Carousel>
            </CarouselBox>
          </MainSilderBox>

          <MainCardSection>
            <NewProductSection>
              <BoxText>
                <TypographyText>--Product</TypographyText>
                <TypographyText setActive={true}>
                  Check our new product
                </TypographyText>
              </BoxText>
              <ViewAllBox>VIEW ALL</ViewAllBox>
            </NewProductSection>

            <Grid container>
              {data?.allShoesProduct?.map((item, i) => (
                <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={3}>
                  <CardsContainer>
                    <Box
                      style={{
                        boxShadow: " rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
                      }}
                    >
                      <NavLink
                        style={{ textDecoration: "none", color: "black" }}
                        to={`/cart/${item._id}`}
                      >
                        <Box
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                        </Box>
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
                      </NavLink>
                    </Box>
                  </CardsContainer>
                </Grid>
              ))}
            </Grid>
          </MainCardSection>
        </>
      )}
    </>
  );
}
