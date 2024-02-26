import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import {
  DividerBox,
  DontTag,
  GoogleBtnBox,
  GoogoleTag,
  HeadingBox,
  InputBox,
  InputLabelBox,
  LoginBtn,
  MainBoxLogin,
  SignUpHereTag,
  SignUpLineBox,
} from "./styled-component";
import { postLoginApi } from "../../api/signApi/signUpApi";
import { toast } from "react-toastify";

export const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = {
      email: data.email,
      password: data.password,
    };

    const res = await postLoginApi(formData);
    if (res.status != 200)
      return toast.error(res.response?.data || "Unable to connect to server");
    localStorage.setItem("Users", JSON.stringify(res.data));
    navigate("/home");
    toast.success("Login Successfully");
  };

  return (
    <>
      <MainBoxLogin>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <HeadingBox>Login to your account</HeadingBox>
          <SignUpLineBox>
            <DontTag>Don't have an account?</DontTag>
            <Link to="/register">
              <SignUpHereTag>Sign up here</SignUpHereTag>
            </Link>
          </SignUpLineBox>
          <GoogleBtnBox>
            <FcGoogle size={30} />
            <GoogoleTag>Continue with Google</GoogoleTag>
          </GoogleBtnBox>
          <DividerBox>OR</DividerBox>
          <InputBox>
            <InputLabelBox>Email</InputLabelBox>
            <TextField
              fullWidth
              type="text"
              {...register("email", {
                required: "Email is required",
                minLength: {
                  value: 3,
                  message: "Email must be at least 3 characters",
                },
              })}
              error={Boolean(errors.username)}
              helperText={errors.username?.message}
              margin="normal"
            />
            <InputLabelBox>Password</InputLabelBox>
            <TextField
              fullWidth
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              margin="normal"
              sx={{ mt: 2 }}
            />
          </InputBox>
          <LoginBtn type="submit">Login</LoginBtn>
        </Box>
      </MainBoxLogin>
    </>
  );
};
