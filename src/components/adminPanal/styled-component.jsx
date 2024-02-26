import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { green } from "@mui/material/colors";

export const ContainerBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "5rem",
  // height:'100vh'
});

export const ChildBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  justifyContent: "center",
  padding: "0px 13rem",
  height: "400px",
  width: "50%",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
});

export const TypographyBox = styled(Typography)({
  color: "#404344",
});

export const TextFieldBox = styled(TextField)({
  backgroundColor: "#e5e7eb",
  border: "none",
  borderRadius: "6px",
  marginTop: "7px",
});
export const SubmiBtn = styled(Button)({
  p: 2,
  backgroundColor: "#4338ca",
  color: "#fff",
  height: "60px",
  // width: '100%',
  fontWeight: "600",
  marginTop: "17px",
  "&:hover": { backgroundColor: "#4338caa1" },
});
