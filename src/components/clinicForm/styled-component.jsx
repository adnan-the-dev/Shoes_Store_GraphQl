import { Box, Button, TextField, Typography, styled } from "@mui/material";

export const UserTextField = styled(TextField)({
  boxShadow:
    "rgba(0, 0, 0, 0.10) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
  borderRadius: "6px",
  marginTop: "10px",
});
export const InputLable = styled(Typography)({
  fontWeight: "600",
  color: "#000",
  fontSize: ".9rem",
});

// *************Boold Box **********

export const RadioMainBox = styled(Box)({
  display: "flex",
  // justifyContent: "space-around",
  justifyContent: "start",
  gap:'2rem',
  marginTop: ".50rem",
});

// *************Button Box **********

export const ButtonBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "1rem",
});

export const CancelAndSaveBtn = styled(Button)(({ save }) => ({
  p: 2,
  backgroundColor: save ? "#4338ca" : "#e7e7e7",
  color: save ? "#fff" : "#2f2fff",
  marginTop: "17px",
  "&:hover": save
    ? { backgroundColor: "#4338caa1" }
    : { backgroundColor: "#4338caa" },
  fontSize: ".75rem",
  lineHeight: "1rem",
  padding: "0.9rem 1.5rem",
}));

export const ImgaeBox = styled(Box)({
  width: "25%",
  height: "25%",
  marginTop: "3rem",
});
