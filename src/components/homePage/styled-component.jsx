import { Box, Typography, styled } from "@mui/material";

export const CatagoryBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
});

export const ChildCatagoryBox = styled(Box)({
  backgroundColor: "#edeef0",
  marginTop: "1rem",
  // width:'25%'
});

export const ImageBox = styled(Box)({
  height: "300px",
  width: "300px",
  marginTop: "1rem",
  // padding: "2px 2px",
});

export const CategoryTag = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

export const TypographyBox = styled(Typography)({
  fontWeight: "600",
  fontSize: "1.25rem",
  lineHeight: "1.75rem",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#000",
    color: "#fff",
  },
});
// *********Silder Section************

export const MainSilderBox = styled(Box)({
  marginTop: "3rem!important",
});

export const SilderTag = styled(Box)({
  marginLeft: "2.5rem",
  fontWeight: "bold",
  fontWeight: "600",
  fontSize: "1.25rem",
  lineHeight: "1.75rem",
  marginBottom: "3rem!important",
});

export const CarouselBox = styled(Box)({
  textAlign: "center",
  // display: "block",
  // justifyContent: "center",
  // alignItems:'center'
});
export const CarouselImage = styled(Box)({
  // height: "300px",
  width: "400px",
  // padding: "2px 2px",
});
export const CarouselBoxText = styled(Box)({
  // display:'flex',
  // justifyContent:'flex-start',
  padding: "0px 1.9rem",
  textAlign: "left",
});
export const CarouselTypography = styled(Typography)({
  fontWeight: "bold",
});

export const CarouselText = styled(Typography)({
  fontWeight: "600",
  marginLeft: "0.5rem",
  marginBottom: "0!important",
  marginTop: "0.5rem!important",
  cursor: "pointer",
  listStyle: "none",
  fontStyle: "normal",
});

export const DiscoutBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

export const DiscoutText = styled(Typography)(({ isActive }) => ({
  color: isActive ? "#9fa5a4" : "#1eb957",
}));

// *********Card Section************

export const MainCardSection = styled(Box)({
  boxSizing: "border-box",
  marginTop: "3rem!important",
  // marginLeft: "1rem",
  // marginRight: "1rem",
});

export const NewProductSection = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxSizing: "border-box",
  marginBottom: "1rem!important",
});

export const BoxText = styled(Box)({
  display: "flex",
  fontWeight: "600",
  fontSize: "1.25rem",
  lineHeight: "1.75rem",
});

export const TypographyText = styled(Typography)(({ setActive }) => ({
  fontWeight: "600",
  fontSize: setActive ? "1.875rem" : "1.25rem",
  lineHeight: setActive ? "2.25rem" : "1.75rem",
  marginLeft: "2.5rem",
  color: setActive ? "#d4dbdd" : "#000",
}));
export const ViewAllBox = styled(Typography)({
  fontWeight: "600",
  cursor: "pointer",
  marginRight: "2.5rem",
  "&:hover": {
    backgroundColor: "#000",
    color: "#fff",
  },
});

// **************CardsContainer************

export const CardsContainer = styled(Box)({
  // margin:'0px 8px',
  display: "flex",
  justifyContent: "center",
  gap: "3rem",
  padding: "1rem 1rem",
  // boxShadow:' rgba(0, 0, 0, 0.15) 0px 3px 3px 0px',
});

export const CardTitle = styled(Typography)({
  fontWeight: "bold",
});
export const CardText = styled(Typography)({
  color: "darkgray",
});

export const CardBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "2px 2px",
});

export const DecriptionSection = styled(Box)({
  padding: "2px 10px",
});

export const PriceSection = styled(Box)({
  display: "flex",
  gap: "8px",
});

export const Price = styled(Typography)(({ setColor }) => ({
  color: setColor ? "#9fa5a4" : "red",
  textDecoration: setColor ? "line-through" : "",
}));

export const DiscoutTypo = styled(Typography)({
  color: "#1eb957",
});

export const CardImage = styled(Box)({
  // height: "300px",
  width: "100%",
  // marginTop: '1rem',
});
