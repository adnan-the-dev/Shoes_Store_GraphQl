import { Box, TextField, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: "2.5rem",
  boxSizing: "border-box",
});

export const ChildBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

// *************CategorySection***************

export const BrandNameBox = styled(Box)({
  backgroundColor: "#fff",
  borderRadius: " 5px",
  marginTop: "20px",
  width: "70%",
  // maxeight: '500px',
  marginLeft: "4rem",
  paddingBottom: " 10px",
  boxShadow: "1px 1px 3px 1px hsla(240,0%,46%,.281)",
});

export const TagName = styled(Typography)(({ colorActive, isActive }) => ({
  marginLeft: "20px",
  paddingTop: isActive ? "0px" : "20px",
  fontSize: "large",
  fontWeight: isActive ? "0" : "bolder",
  marginBottom: isActive ? "15px" : "30px",
  color: isActive ? "grey" : colorActive ? "#005f48" : "black",
  cursor: isActive ? "pointer" : colorActive ? "pointer" : "",
}));

// *************CardSection***************

export const MainCardBox = styled(Box)({
  // marginLeft: '1.25rem',
});

export const ChildCard = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  marginTop: "3rem!important",
});

export const CardBoxText = styled(Box)({
  display: "flex",
});
export const TextBox = styled(Typography)(({ colorBox }) => ({
  fontSize: "1.875rem",
  lineHeight: "2.25rem",
  fontWeight: "600",
  marginLeft: "2.5rem",
  color: colorBox ? "#e2e8f0" : "#212529",
}));

export const CardsContainer = styled(Box)({
  // margin:'0px 8px',
  display: "flex",
  justifyContent: "center",
  gap: "3rem",
  padding: "1rem 1rem",
  // cursor:'pointer'
  // boxShadow:' rgba(0, 0, 0, 0.15) 0px 3px 3px 0px',
});

export const CardImage = styled(Box)({
  // height: "300px",
  width: "100%",
  // marginTop: '1rem',
});

export const DecriptionSection = styled(Box)({
  padding: "2px 10px",
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
