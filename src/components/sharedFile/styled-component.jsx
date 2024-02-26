import { Box, Button, styled } from "@mui/material";

export const Basic = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  height: "100vh",
  fontSize: ".875rem",
  lineHeight: "3rem",
  padding: "4rem",
  color: "gray",
});
export const TagHeading = styled(Box)({
  // color:'red',
  // fontSize: '2rem',
  // lineHeight: '3rem',
  backgroundImage: "linear-gradient(90deg, #31343a 53%, #5745df 49%)",
  color: "#0000",
  webkitBackgroundClip: "text",
  backgroundClip: "text",
  fontWeight: "bold",
  display: "inlineBlock",
  fontSize: "1.8rem",
});

export const ButtonBox = styled(Button)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  textTransform: "lowercase !important",
});
export const ImageBox = styled(Box)({
  opacity: ".80!important",
});

// ****************Navbar************
export const MainBox = styled(Box)({
  height: "85px",
  width: "100%",
  // border:'1px solid red',
  // backgroundColor: 'aqua',
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0px 6rem",
  cursor: "pointer",
  boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
});
export const LogoBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  opacity: ".900",
});
export const LogutBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "9px",
  opacity: ".900",
  fontSize: "1.4rem",
});

// ****************Navbar************
