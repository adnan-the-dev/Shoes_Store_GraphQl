import { Box, Button, TextField, Typography ,styled} from "@mui/material";

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

// ---------------Add To Cart---------------
export const CartImageBox = styled(Box)(({ theme, prop }) => ({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  border: "2px solid var(--color-text-secondary)",
  backgroundColor: "#fff",
}));
export const ItemsBox = styled(Box)(() => ({
    maxHeight: "500px",
    height: "400px",
    width: "100%",
    overflowY: "auto",
  
    "&::-webkit-scrollbar": {
      width: "3px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
      boxShadow: "inset 0 0 5px grey",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "var(--color-text-secondary)",
      borderRadius: "10px",
      border: "2px solid #f1f1f1",
    },
  }));
  export const HorizLine = styled(Box)(() => ({
  border: "1px solid gray",
  margin: " 10px 10px 0 10px",
}));
export const EmptyCartBox = styled(Box)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  userSelect: "none",
}));
export const CartItemBox = styled(Box)(() => ({
  display: "flex",
  alignItems: 'center',
  justifyContent: "space-between",
  padding: " 10px 10px 10px 10px",
  userSelect: "none",
}));
export const CartItem = styled(Box)(() => ({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  gap: "10px",
  padding: "3px 10px",
  width: "35%",
}));

export const ItemNameTypo = styled(Typography)(() => ({
  fontSize: "14px",
  fontWeight: 500,
}));

export const ItemPriceTypo = styled(Typography)(() => ({
  fontSize: "12px",
  fontWeight: 500,
  color: "var(--color-text-secondary)",
}));
export const QuantityBox = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  width: "40%",
}));

export const QtyBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
  border: "1px solid #ABBBC2",
  borderRadius: "7px",
  fontSize: "18px",
  fontWeight: 600,
  cursor: "pointer",
  color: "var(--color-text-primary)",
  backgroundColor: "var(--color-bg-primary)",
  userSelect: "none",
  "&:hover": {
    boxShadow: "0px 0px 10px 1px #cbd5e0",
    backgroundColor: "#393C49",
    border: "2px solid #fff",
    color: "#fff",
  },
}));
export const CartTypo = styled(Typography)(() => ({
  display: "inline-block",
  padding: 0,
  margin: "7px",
  color: "var(--color-button)",
  fontWeight: 700,
  fontSize: "16px",
}));
export const DelBox = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  justifyContent: "end",
  // width: "120px",
  width: "25%",
}));

export const DelItemBox = styled(Box)(({}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
  border: "2px solid #FF7CA3",
  borderRadius: "7px",
  fontSize: "25px",
  fontWeight: 600,
  cursor: "pointer",
  color: "#FF7CA3",
  transition: "0.2s all",
  "&:hover": {
    boxShadow: "0px 0px 10px 1px #FF7CA3",
    backgroundColor: "#FF7CA3",
    border: "1px solid #fff",
    color: "#fff",
  },
}));

export const CartHorizLine = styled(Box)(() => ({
  border: "1px solid  #393C49",
  margin: "0px 30px",
}));

export const CartEndTypoBox = styled(Box)(({ theme, prop }) => ({
  // border: "1px solid",
  borderRadius: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // margin: "3px 3px",
  padding: "0 10px",
}));
export const CartTypo1 = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 700,
  color: "var(--color-text-secondary)",
}));

export const StyledBadge = styled()(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: '2px solid',
    padding: "0 4px",
  },
}));

// ---------------Add To Cart---------------













// export const ItemsBox = styled(Box)(() => ({
//   maxHeight: "500px",
//   height: "400px",
//   width: "100%",
//   overflowY: "auto",

//   "&::-webkit-scrollbar": {
//     width: "3px",
//   },
//   "&::-webkit-scrollbar-track": {
//     background: "#f1f1f1",
//     boxShadow: "inset 0 0 5px grey",
//     borderRadius: "10px",
//   },
//   "&::-webkit-scrollbar-thumb": {
//     background: "var(--color-text-secondary)",
//     borderRadius: "10px",
//     border: "2px solid #f1f1f1",
//   },
// }));





// export const DecimalQtyBox = styled(Box)(() => ({
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   width: "fit-content",
//   height: "25px",
//   border: "1px solid #ABBBC2",
//   borderRadius: "5px",
//   fontSize: "12px",
//   fontWeight: 600,
//   cursor: "pointer",
//   color: "var(--color-text-primary)",
//   backgroundColor: "var(--color-bg-primary)",
//   transition: "0.2s all",
//   userSelect: "none",
//   "&:hover": {
//     boxShadow: "0px 0px 10px 1px #cbd5e0",
//     backgroundColor: "#393C49",
//     border: "2px solid #fff",
//     color: "#fff",
//   },
// }));






// // ***************** Transection ****************

// export const NameBox = styled(Box)(() => ({
//   display: "flex",
//   alignItems: "center",
// }));

// export const MainBox = styled(Box)(() => ({
//   // background: "#f5f6fa",
//   background: "var(--color-bg-primary)",
//   // --color-bg-primary
// }));

// export const TopBox = styled(Box)(() => ({
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
// }));

// export const TopBox1 = styled(Box)(() => ({
//   margin: "20px 0",
// }));

// export const TopTypo = styled(Box)(() => ({
//   fontSize: "24px",
//   fontWeight: 500,
//   color: "var(--color-text-primary)",
// }));

// export const TopTypo1 = styled(Box)(() => ({
//   fontSize: "14px",
//   fontWeight: 400,
//   color: "var(--color-text-secondary)",
// }));

// export const StyledTableCell = styled()(({ theme }) => ({
//   color: theme == "light" ? "#526484" : "#fff",
// }));

// export const TableTypo = styled(Typography)(({ theme }) => ({
//   fontSize: "14px",
//   color: theme == "light" ? "#364a63" : "#fff",
// }));

// export const TrnxBox = styled(Box)(({ theme }) => ({
//   border: "1px solid var(--color-text-secondary)",
//   padding: "10px",
//   borderRadius: "7px",
//   display: "flex",
//   flexDirection: "column",
//   height: "130px",
//   flexWrap: "wrap",
// }));

// export const KeyTypo = styled(Typography)(({ theme }) => ({
//   fontSize: "14px",
//   color: "#1ee0ac",
//   // color: theme == "light" ? "#8094ae" : "#8094ae",
// }));

// export const ValueTypo = styled(Typography)(({ theme }) => ({
//   fontSize: "14px",
//   fontWeight: 700,
//   color: "var(--color-text-secondary)",
// }));

// export const SubTypo = styled(Typography)(() => ({
//   display: "inline-block",
//   padding: 0,
//   margin: "7px",
//   fontSize: "14px",
//   color: "var(--color-button)",
//   fontWeight: 700,
// }));