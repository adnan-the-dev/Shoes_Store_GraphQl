import { Autocomplete, Box, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { RiShoppingBag2Line } from "react-icons/ri";
import { LogoBox, LogutBox, MainBox } from "../sharedFile/styled-component";
import { getProductData } from "../../api/signApi/signUpApi";
import { NavLink, useNavigate } from "react-router-dom/dist";

export const Navbar = () => {
  const navigate = useNavigate();
  const userData = localStorage.getItem("Users");
  const user = JSON.parse(userData);
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

  const getDataApi = async () => {
    const res = await getProductData();
    setProdcuts(res.data.result);
  };
  useEffect(() => {
    getDataApi();
  }, []);

  const arr = prodcuts.map((item) => ({ cat: item.catagory, id: item.images }));
  const unique = [...new Set(arr.map((item) => item.cat))];

  return (
    <>
      <MainBox>
        <LogoBox>
          <NavLink to="/home">
            <img style={{ width: "70px" }} src={logo} alt="" />
          </NavLink>
          {user ? (
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

          {!user ? (
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
          {user ? (
            <Typography onClick={() => logout()}>Log out</Typography>
          ) : null}

          {user ? (
            <>
              <Tooltip title={user.username}>
                <Box>
                  <AiOutlineUser />
                </Box>
              </Tooltip>
              <NavLink to="/cart" style={{ color: "black" }}>
                <RiShoppingBag2Line />
              </NavLink>
            </>
          ) : null}
        </LogutBox>
      </MainBox>
    </>
  );
};
