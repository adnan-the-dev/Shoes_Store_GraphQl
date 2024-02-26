import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import {
  Basic,
  ButtonBox,
  ImageBox,
  TagHeading,
} from "../sharedFile/styled-component";
import { toast } from "react-toastify";
import { Link, NavLink } from "react-router-dom";

export default function Main() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={8} xl={8}>
          <Basic>
            <TagHeading>Feat wear Paradies</TagHeading>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis commodi cum cupiditate ducimus, fugit harum id
              necessitatibus odio quam quasi, quibusdam rem tempora voluptates.
              Cumque debitis dignissimos id quam vel!
            </Typography>
            <ButtonBox>
              <NavLink to="/login">
                <Button variant="contained" color="success">
                  Log in
                </Button>
              </NavLink>
              <NavLink to="/adminLog">
                <Button variant="outlined" color="primary">
                  Admin panel
                </Button>
              </NavLink>
            </ButtonBox>
          </Basic>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <ImageBox>
            <img
              src="https://shoe-paradies.vercel.app/_next/image?url=%2Fwal.avif&w=1920&q=75"
              alt=""
            />
          </ImageBox>
        </Grid>
      </Grid>
    </>
  );
}
