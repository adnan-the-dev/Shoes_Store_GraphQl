import { Autocomplete, Box, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { RiShoppingBag2Line } from "react-icons/ri";
import { LogoBox, LogutBox, MainBox } from "../sharedFile/styled-component";
import { getProductData } from "../../api/signApi/signUpApi";
import { NavLink, json, useNavigate } from "react-router-dom/dist";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../../graphqlOpratation/queries";

export const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);

  const store = useSelector((state) => state.cart.cart);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  const [prodcuts, setProdcuts] = useState([]);
  const [brand, setBrand] = useState("");

  function changeRoute() {
    navigate(`/products/${brand}`);
  }
  useEffect(() => {
    if (brand != "") {
      changeRoute();
    }
  }, [brand]);

  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Some Error Ocured</h1>
  }

  useEffect(() => {
    setProdcuts(data?.allShoesProduct);
  }, []);

  const arr = prodcuts.map((item) => ({ cat: item.catagory, id: item.images }));
  const unique = [...new Set(arr.map((item) => item.cat))];

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <>
      <MainBox>
        <LogoBox>
          <NavLink to="/home">
            <img style={{ width: "70px" }} src={logo} alt="" />
          </NavLink>
          {token ? (
            <>
              <NavLink
                to="/completeOrders"
                style={{ textDecoration: "none", color: "#191919" }}
              >
                <Typography>Complete Order</Typography>
              </NavLink>
              <NavLink
                to="/pendingOrders"
                style={{ textDecoration: "none", color: "#191919" }}
              >
                <Typography>Pending Order</Typography>
              </NavLink>
              <Box>
                <select
                  value={brand}
                  onChange={(e) => {
                    setBrand(e.target.value);
                    // changeRoute();
                  }}
                  style={{
                    padding: "8px",
                    outline: "none",
                    fontSize: "1rem",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <option label="Select brand"></option>
                  {unique.map((item, i) => {
                    return (
                      <option key={i} value={item.toLowerCase()}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </Box>
            </>
          ) : null}

          {!token ? (
            <>
              <NavLink
                to="/login"
                style={{ textDecoration: "none", color: "#191919" }}
              >
                <Typography style={{ fontWeight: "600" }}>Log in</Typography>
              </NavLink>
              <NavLink
                to="/adminLog"
                style={{ textDecoration: "none", color: "#191919" }}
              >
                <Typography style={{ fontWeight: "600" }}>
                  Admin panel
                </Typography>
              </NavLink>
            </>
          ) : null}
        </LogoBox>
        <LogutBox>
          {token ? (
            <Typography onClick={() => logout()}>Log out</Typography>
          ) : null}

          {token ? (
            <>
              <Tooltip title={user.username}>
                <Box>
                  <AiOutlineUser />
                </Box>
              </Tooltip>
              <NavLink to="/cart" style={{ color: "black" }}>
                <IconButton aria-label="cart">
                  <StyledBadge
                    badgeContent={store.length || '0'}
                    color="secondary"
                  >
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </NavLink>
            </>
          ) : null}
        </LogutBox>
      </MainBox>
    </>
  );
};
