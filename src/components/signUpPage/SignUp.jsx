import { Box, Button, Divider, Typography } from "@mui/material";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { useForm } from "react-hook-form";
import {
  AlertBox,
  AlertBoxParagraph,
  AlertBoxTage,
  ArrowBox,
  ButtonBox,
  CancelAndSaveBtn,
  EmailMainBox,
  InputLable,
  MailBox,
  MainInputCityBox,
  MainZipCodeBox,
  UserTextField,
} from "./styled-component";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { postRegisterApi } from "../../api/signApi/signUpApi";

export const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = {
      username: data.username,
      password: data.password,
      // email: data.email,
      isAdmin: data.isAdmin,
      street: data.address,
      city: data.city,
      state: data.stateProvince,
      country: data.country,
      postalCode: data.PostalCode,
    };

    console.log(formData,'Hlloe');
  //   const res = await postRegisterApi(formData);
  //   if (res.status == 200) {
  //     toast.success("User Register Successfully");
  //     navigate("/login");
  //   } else {
  //     toast.error("Dublicate key error");
  //   }
  // };
  }
  return (
    <>
      <Box>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            // maxWidth: "600px",
            // margin: "auto",
            padding: "4rem",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            backgroundColor: "white",
            "& fieldset": { border: "none" },
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Register
            <IoIosInformationCircleOutline size={18} />
          </Typography>
          <Divider sx={{ marginTop: "12px" }} />
          <Box style={{ marginTop: "17px", padding: "12px 0px" }}>
            <InputLable>First Name</InputLable>
            <UserTextField
              fullWidth
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username minimum at least 3 characters",
                },
              })}
              error={Boolean(errors.username)}
              helperText={errors.username?.message}
              margin="normal"
            />
            <InputLable>password</InputLable>
            <UserTextField
              fullWidth
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              sx={{ mt: 2 }}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              margin="normal"
            />
            <InputLable>Email</InputLable>
            <EmailMainBox>
              <MailBox>
                <MdOutlineMail size={19} />
              </MailBox>
              <UserTextField
                fullWidth
                placeholder="example@gmail.com"
                {...register("email", {
                  required: "Email is required",
                })}
                error={Boolean(errors.email)}
              helperText={errors.email?.message}
              margin="normal"
              />
            </EmailMainBox>
            <InputLable>Street Address</InputLable>
            <UserTextField
              fullWidth
              {...register("address", {
                required: "Address is required",
              })}
              error={Boolean(errors.address)}
              helperText={errors.address?.message}
              margin="normal"
            />
            <InputLable>City</InputLable>
            <MainInputCityBox>
              <UserTextField
                fullWidth
                placeholder="Log Angeles"
                {...register("city", {
                  required: "City is required",
                })}
                error={Boolean(errors.city)}
              helperText={errors.city?.message}
              margin="normal"
              />
              <ArrowBox>
                <IoIosArrowUp size={14} />
                <IoIosArrowDown size={14} />
              </ArrowBox>
            </MainInputCityBox>
            <InputLable>State/Province</InputLable>
            <UserTextField
              fullWidth
              placeholder="California"
              {...register("stateProvince", {
                required: "StateProvince is required",
              })}
              error={Boolean(errors.stateProvince)}
              helperText={errors.stateProvince?.message}
              margin="normal"
            />
            <InputLable>Country</InputLable>
            <UserTextField
              fullWidth
              placeholder="United States"
              {...register("country", {
                required: "Country is required",
              })}
              error={Boolean(errors.country)}
              helperText={errors.country?.message}
              margin="normal"
            />
            <MainZipCodeBox>
              ZIP/Postal Code
              <IoIosInformationCircleOutline size={18} />
            </MainZipCodeBox>
            <UserTextField
              fullWidth
              placeholder="8675"
              {...register("PostalCode", {
                required: "ZIP/Postal Code is required",
              })}
              error={Boolean(errors.PostalCode)}
              helperText={errors.PostalCode?.message}
              margin="normal"
            />
            <AlertBox>
              <AlertBoxTage>Alerts</AlertBoxTage>
              <AlertBoxParagraph>
                Get updates of any new activity or features. Turn on/off your
                preferences
              </AlertBoxParagraph>
            </AlertBox>
            <ButtonBox>
              <CiCircleCheck
                size={17}
                strokeWidth="1"
                color="#17d781"
                marginTop="1rem"
              />

              <CancelAndSaveBtn onClick={() => reset()}>
                Cancel
              </CancelAndSaveBtn>
              <CancelAndSaveBtn type="submit" savebtn={true}>
                Save
              </CancelAndSaveBtn>
            </ButtonBox>
          </Box>
        </Box>
      </Box>
    </>
  );
};
