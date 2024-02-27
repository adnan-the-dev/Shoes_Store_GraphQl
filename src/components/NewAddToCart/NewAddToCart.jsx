import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Badge, Typography } from "@mui/material";
import { RiDeleteBinLine } from "react-icons/ri";
import { category } from "../arrayComponent/Array";
export default function NewAddToCart() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 400 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* cart */}

      <Box sx={{}}>
        <Box
          style={{
            display: "flex",
            boxSizing: "border-box",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "10px 15px",
            fontWeight: "600",
          }}
        >
          <Typography
            style={{
              fontSize: "1rem",
              lineHeight: "1.5",
              fontWeight: "600",
              boxSizing: "border-box",
            }}
          >
            Your Cart
          </Typography>
          <Typography
            style={{
              margin: "0px",
              color: "rgb(252, 185, 45)",
              cursor: "pointer",
              boxSizing: "border-box",
              textDecoration: "underline rgba(252, 185, 45, 0.4)",
            }}
          >
            Clear cart
          </Typography>
        </Box>
        <Box
          sx={{
            maxHeight: "500px",
            height: "440px",
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
          }}
        >
          {category.map((item, i) => {
            return (
              <Box key={i}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: " 10px 10px 10px 10px",
                    userSelect: "none",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      gap: "10px",
                      padding: "3px 10px",
                      width: "35%",
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        // alignItems: 'center',
                        justifyContent: "space-between",
                        padding: " 10px 10px 10px 10px",
                        userSelect: "none",
                        position: "absolute",
                        top: "0",
                      }}
                    >
                      <img
                        // style={{ borderRadius: "50%"}}
                        style={{
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                        }}
                        priority="true"
                        src={item.img}
                        alt="hsdfk"
                      // height={60}
                      // width={60}
                      />
                    </Box>
                    <Box style={{ marginLeft: "8rem" }}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 600,
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: 500,
                          color: "var(--color-text-secondary)",
                          // width: "max-content"
                          width: "12rem",
                        }}
                      >
                        2 Small Pizzas,l Pasta (Fl) & 500 ML Soft Drink this is
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                    marginRight: "2rem",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "rgb(17 17 17)",
                      }}
                    >
                      Rs. {item.price}
                    </Typography>
                  </Box>
                  <Box>
                    <RiDeleteBinLine color="rgb(107 107 108)" size={25} />
                  </Box>
                </Box>
                <Box
                  sx={{
                    border: "1px solid  #393C49",
                    margin: "0px 30px",
                  }}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          border: "1px solid  #393C49",
          margin: "0px 30px",
        }}
      />
      <Box style={{ padding: "10px 15px", boxSizing: "border-box" }}>
        <Box
          style={{
            fontSize: "14px",
            boxSizing: "border-box",
            margin: "6px 0px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{
              fontSize: "14px",
              color: "#6f7274",
              fontWeight: "400",
              lineHeight: "1.5",
            }}
          >
            Subtotal
          </Typography>
          <Typography style={{ color: "rgb(131, 143, 155)" }}>
            Rs.4670
          </Typography>
        </Box>
        <Box
          style={{
            fontSize: "14px",
            boxSizing: "border-box",
            margin: "6px 0px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{
              fontSize: "14px",
              color: "#6f7274",
              fontWeight: "400",
              lineHeight: "1.5",
            }}
          >
            Delivery Charges
          </Typography>
          <Typography style={{ color: "rgb(131, 143, 155)" }}>
            Rs.0.00
          </Typography>
        </Box>

        <Box
          style={{
            boxSizing: "border-box",
            margin: "6px 0px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{
              fontSize: "1rem",
              color: "rgb(36 40 43)",
              fontWeight: "bold",
              lineHeight: "1.5",
            }}
          >
            Grand total
          </Typography>
          <Typography
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "rgb(131, 143, 155)",
            }}
          >
            Rs.4670
          </Typography>
        </Box>
        <button
          style={{
            fontSize: "14px",
            padding: "0px 16px",
            width: "100%",
            outLine: "0px",
            border: "none",
            textDecoration: "none",
            boxShadow: "none",
            backgroundColor: "rgb(248, 191, 68)",
            color: "rgb(0, 0, 0)",
            borderRadius: "25px",
            lineHeight: "1.25",
            height: "42px",
            fontWeight: "bold",
            textTransform: "unset",
            cursor: "pointer",
          }}
        >
          Checkout
        </button>
      </Box>
    </Box>
  );
  return (
    <>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
}
