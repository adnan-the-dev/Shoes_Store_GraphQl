import React, { useEffect, useState } from "react";
import {
  BtnBox,
  ButtonAddCart,
  ChildContainer,
  ChildGridBox,
  ChildImage,
  CounterBox,
  DescriptionHeading,
  ImageBox,
  ImageTextBox,
  LargeImage,
  LargeImg,
  MainContainerBox,
  Price,
  PriceBox,
  PriceSection,
  ProductDescription,
  SizeBox,
  SizeGridBox,
  SizeTage,
  SmallImge,
  TypographyBox,
} from "./styled-component";
import Adidas from "../../assets/Adidas.webp";
import racer from "../../assets/racer.webp";
import { size } from "../arrayComponent/Array";
import { getSingleProductApi } from "../../api/signApi/signUpApi";
import { useNavigate, useParams } from "react-router-dom/dist";
import { setCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Loader } from "../loaderPage/Loader";
import { Box } from "@mui/material";
export function AddToCartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [singleProduct, setSingleProduct] = useState({});
  const [selectSize, setSelectSize] = useState("");
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const [loading, setLoading] = useState(true);
  const param = useParams();
  const getDataApi = async () => {
    const res = await getSingleProductApi(param.id);
    if (res.status == 200) {
      setLoading(false);
      setSingleProduct(res.data);
    }
  };

  function addToCart() {
    const total = {
      name: singleProduct.productname,
      mindetail: singleProduct.mindetail,
      productId: singleProduct._id,
      img: singleProduct?.images,
      price: singleProduct.price,
      size: selectSize,
      quantity: quantity,
    };
    if (!selectSize == "") {
      dispatch(setCart(total));
      navigate("/cart");
    } else {
      toast.error("Select Size");
    }
  }
  useEffect(() => {
    const loaderComponent = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    };
    getDataApi();
    loaderComponent();
  }, []);

  return (
    <>
      <MainContainerBox>
        <ChildContainer>
          <ImageBox>
            <ChildImage>
              {!loading && (
                <>
                  <SmallImge
                    component="img"
                    src={singleProduct?.images[0]}
                    alt=""
                    onClick={() => setImage(singleProduct.images[0])}
                  />
                  <SmallImge
                    isActive={true}
                    component="img"
                    src={singleProduct?.images[1]}
                    alt=""
                    onClick={() => setImage(singleProduct.images[1])}
                  />
                  <SmallImge
                    isActive={true}
                    component="img"
                    src={singleProduct?.images[2]}
                    alt=""
                    onClick={() => setImage(singleProduct.images[2])}
                  />
                </>
              )}
            </ChildImage>
            {!loading && (
              <LargeImage>
                {isLoading ? (
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <Loader />
                  </Box>
                ) : (
                  <LargeImg
                    component="img"
                    src={image || singleProduct.images[0]}
                    alt=""
                  />
                )}
              </LargeImage>
            )}
          </ImageBox>

          <ImageTextBox>
            {
              <>
                <TypographyBox>{singleProduct?.productname}</TypographyBox>
                <TypographyBox isActive={true}>
                  {singleProduct?.mindetail}
                </TypographyBox>
              </>
            }

            <PriceSection>
              <PriceBox>
                <Price>Price: $ 70</Price>
                <Price isActive={true}>Price: $ {singleProduct?.price}</Price>
              </PriceBox>
              <Price isLine={true}>incl of taxes</Price>
              <Price isLine={true}>(also incl all duty charges)</Price>

              <SizeBox>
                <SizeTage>Select Size</SizeTage>
                <SizeGridBox>
                  {singleProduct?.sizes?.map((item, i) => {
                    return (
                      <ChildGridBox
                        key={i}
                        onClick={() => setSelectSize(item)}
                        style={{
                          backgroundColor: selectSize == item ? "black" : "",
                          color: selectSize == item ? "#fff" : "",
                        }}
                      >
                        {item}
                      </ChildGridBox>
                    );
                  })}
                </SizeGridBox>
              </SizeBox>

              <CounterBox>
                <BtnBox
                  onClick={() =>
                    setQuantity(quantity > 1 ? quantity - 1 : (quantity = 0))
                  }
                >
                  -
                </BtnBox>
                <BtnBox active={true}>{quantity}</BtnBox>
                <BtnBox onClick={() => setQuantity(quantity + 1)}>+</BtnBox>
              </CounterBox>

              <ButtonAddCart onClick={addToCart} component="button">
                Add to Cart
              </ButtonAddCart>
              <ButtonAddCart active={true} component="button">
                Online payment
              </ButtonAddCart>

              <ProductDescription>
                <DescriptionHeading>product details</DescriptionHeading>
                {
                  <DescriptionHeading activeWidth={true}>
                    {singleProduct?.fulldetail}
                  </DescriptionHeading>
                }
              </ProductDescription>
            </PriceSection>
          </ImageTextBox>
        </ChildContainer>
      </MainContainerBox>
    </>
  );
}
