import { Box, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)({
  padding: "2.5rem",
  minHeight: "400px",
});

export const SecondCartItem = styled(Box)({
  borderBottom: "1.5px solid gray",
  display: "flex",
  marginBottom: "0.8rem!important",
});

export const CartImage = styled(Box)({
  width: "8%",
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
  color: isActive ? "rgb(86 90 81)" : "#42463b",
  marginLeft: isLeft ? "5rem" : "",
}));

export const MainDeleteBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

export const SecondBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const PendinBoxBtn = styled(Box)(({ status }) => ({
  fontWeight: "600",
  cursor: "pointer",
  padding: "0.5rem",
  border: status ? "2px solid #459f2e" : "2px solid #e7bd18",
  borderRadius: "7px",
  color: status ? "#459f2e" : "#e7bd18",
  "&:hover": {
    color: status ? "#459f2e" : "#000",
  },
}));

export const CartBox = styled(Box)({
  padding: "12px",
  marginBottom: "1rem",
  border: "1px solid #e7e2e2",
  // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
});
