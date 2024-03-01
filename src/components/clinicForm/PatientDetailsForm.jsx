import {
  Box,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import {
  ButtonBox,
  CancelAndSaveBtn,
  ImgaeBox,
  InputLable,
  RadioMainBox,
  UserTextField,
} from "./styled-component";

export const PatientDetailsForm = () => {
  const img = "https://hijamapoints.com/wp-content/uploads/2020/05/back.gif";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = {
      patientName: data.patientName,
      contact: data.contact,
      SecondContact: data.SecondContact,
      ref: data.ref,
      serialNo: data.serialNo,
      address: data.address,
      disease: data.disease,
      remarks: data.remarks,
      BooldPressure: data.BooldPressure,
      Diabetes: data.Diabetes,
      date: data.date,
      
    };
  };
  return (
    <>
      <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            maxWidth: "600px",
            maxHeight: "56rem",
            padding: "3rem",
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
            Appiontment
          </Typography>
          <Divider sx={{ marginTop: "12px" }} />
          <Box style={{ padding: "10px 0px" }}>
            <UserTextField
              fullWidth
              label="Patient Name"
              {...register("patientName", {
                required: "patientName is required",
                minLength: {
                  value: 3,
                  message: "patientName minimum at least 3 characters",
                },
              })}
              error={Boolean(errors.patientName)}
              helperText={errors.patientName?.message}
            />

            <UserTextField
              fullWidth
              label="Patient Contact"
              placeholder="03001234567"
              {...register("contact", {
                required: "Contact is required",
              })}
              error={Boolean(errors.contact)}
              helperText={errors.contact?.message}
            />

            <UserTextField
              fullWidth
              label="Second Contact"
              placeholder="03001234567"
              {...register("SecondContact")}
              error={Boolean(errors.SecondContact)}
              helperText={errors.SecondContact?.message}
            />
            <UserTextField
              fullWidth
              label="Ref#"
              placeholder="Ref#"
              {...register("ref")}
              error={Boolean(errors.ref)}
              helperText={errors.ref?.message}
            />
            <UserTextField
              fullWidth
              label="Sr/No"
              type="number"
              placeholder="Serial No"
              {...register("serialNo")}
              error={Boolean(errors.serialNo)}
              helperText={errors.serialNo?.message}
            />

            <UserTextField
              multiline
              minRows={2}
              maxRows={2}
              fullWidth
              label="Address"
              placeholder=""
              {...register("address")}
              error={Boolean(errors.address)}
              helperText={errors.address?.message}
            />

            <UserTextField
              multiline
              minRows={2}
              maxRows={2}
              fullWidth
              label="Patient Disease"
              placeholder=""
              {...register("disease")}
              error={Boolean(errors.disease)}
              helperText={errors.disease?.message}
            />

            <UserTextField
              multiline
              minRows={2}
              maxRows={2}
              fullWidth
              label="Remarks"
              placeholder=""
              {...register("remarks")}
              error={Boolean(errors.remarks)}
              helperText={errors.remarks?.message}
            />
            <RadioMainBox>
              <Box>
                <InputLable>Boold Pressure</InputLable>
                <RadioGroup>
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                    {...register("BooldPressure")}
                  />
                  <FormControlLabel
                    value="No"
                    control={<Radio />}
                    label="No"
                    {...register("BooldPressure")}
                  />
                </RadioGroup>
              </Box>
              <Box>
                <InputLable>Diabetes</InputLable>
                <RadioGroup>
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                    {...register("Diabetes")}
                  />
                  <FormControlLabel
                    value="No"
                    control={<Radio />}
                    label="No"
                    {...register("Diabetes")}
                  />
                </RadioGroup>
              </Box>
              <Box>
                {/* <input {...register("date")} type="date" /> */}
              </Box>
            </RadioMainBox>
            <ButtonBox>
              <CancelAndSaveBtn onClick={() => reset()}>
                Reset Form
              </CancelAndSaveBtn>
              <CancelAndSaveBtn type="submit" save="true">
                Submit
              </CancelAndSaveBtn>
            </ButtonBox>
          </Box>
        </Box>
        <ImgaeBox component="img" src={img} alt="" />
      </Box>
    </>
  );
};
