import { Box, Button, TextField, Typography, styled } from "@mui/material";

// (({isActive})=>({
export const MainShoppingCartBox = styled(Box)({
  marginBottom: "5rem",
});

export const CartHeadingBox = styled(Box)({
  width: "100%",
  marginTop: "3rem",
  textAlign: "center",
});

export const Heading = styled(Typography)({
  fontWeight: "600",
  fontSize: "1.875rem",
  lineHeight: "2.25rem",
  textAlign: "center",
  color: "#202428",
});

export const MainCartItemBox = styled(Box)({
  paddingRight: "10rem",
  paddingLeft: "10rem",
  display: "flex",
  width: "100%",
});

export const ChildCartitem = styled(Box)({
  width: "66%",
  marginBottom: "0",
});

export const CartItem = styled(Typography)({
  fontWeight: "600",
  color: "#202428",
});

export const SecondCartItem = styled(Box)({
  borderBottom: "1.5px solid gray",
  display: "flex",
  marginBottom: "0.25rem!important",
});

export const CartImage = styled(Box)({
  width: "15%",
  maxWidth: "100%",
  height: "auto",
  display: "block",
  verticalAlign: "middle",
});

export const CartTextBox = styled(Box)({
  width: "100%",
  marginLeft: "0.5rem",
  marginTop: "0.5rem!important",
});

export const TagBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

export const Text = styled(Typography)(({ isActive, isLeft }) => ({
  fontWeight: isActive ? "" : "600",
  fontSize: isActive ? ".900rem" : "1.25rem",
  lineHeight: isActive ? "1.25rem" : "1.75rem",
  marginBottom: "0.25rem!important",
  color: isActive ? "#939590" : "#42463b",
  marginLeft: isLeft ? "5rem" : "",
  display: isLeft ? "flex" : "",
  gap: isLeft ? "1rem" : "",
}));

export const MainDeleteBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

export const SecondBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const MainSummaryBox = styled(Box)({
  width: "25%",
  marginLeft: "2.5rem",
});

export const SummaryChildBox = styled(Box)({
  borderRadius: "0.375rem",
  padding: "1rem",
  backgroundColor: "#cdfae6",
});

export const SubTotalBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "2px solid gray",
});

export const SummaryDescription = styled(Typography)({
  fontSize: ".75rem",
  lineHeight: "1rem",
  marginTop: "1rem",
});

export const CheckoutBtn = styled(Button)({
  cursor: "pointer",
  borderRadius: "50px",
  width: "100%",
  height: "2.5rem",
  textAlign: "center",
  backgroundColor: "#000000",
  color: "#fff",
  marginBottom: "0",
  marginTop: "1rem",
  fontSize: "100%",
  lineHeight: "inherit",
  "&:hover": {
    backgroundColor: "hsl(0deg 0% 76.86%)",
    color: "#000",
  },
});
