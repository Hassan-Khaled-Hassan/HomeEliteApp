import {
  Avatar,
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import SignUpFunc from "./SignUpFunc";
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PacmanLoader } from "react-spinners";
import image from "../images/WhatsApp_Image_2024-08-24_at_17.44.20_f8ac7481-removebg-preview.png";

const CssTextField = styled(TextField)(({ theme }) => ({
  "& label": {
    color: "#B5B5B5",
  },
  "& label.Mui-focused": {
    color: "#9D7D43",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "yellow",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#9D7D43",
      borderWidth: "3px",
      borderRadius: "15px",
    },
    "&:hover fieldset": {
      borderColor: "#9D7D43",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#9D7D43",
    },
  },
}));

const SignUp = ({ mode, screenWidth }) => {
      const { id } = useParams();
      console.log(id)
  const [
    regPassword,
    showPassword,
    theme,
    errors,
    register,
    handleSubmit,
    handleClick,
    handleTogglePasswordVisibility,
    loading,
  ] = SignUpFunc(id);

  return (
    <Box
      sx={{
        p: { xs: 0, sm: 6 },
        display: "flex",
        justifyContent: "flex-start",
        backgroundColor: "#bdb9b9",
        backgroundImage:
          mode === "light"
            ? 'url("https://iili.io/dX70CFt.jpg")'
            : 'url("https://iili.io/dX70CFt.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        mt: 14,
      }}
    >
      <Container
        component="div"
        maxWidth="sm"
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: screenWidth > 600 ? "55px" : "0px",
          width: { xs: "100%", sm: "565px" },
        }}
        bgcolor="primary.light"
      >
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              marginTop: 0,
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{ m: 1, bgcolor: "#9D7D43", width: "5px", height: "35px" }}
            />
            <Typography
              component="h1"
              variant="h5"
              sx={{ fontWeight: "bold", m: "auto 5px" }}
            >
              Update Password
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <img
                src={image}
                alt="logo"
                style={{
                  height: "369px",
                  width: "100%",
                }}
              />
            </Box>
            <Typography
              component="h1"
              variant="h6"
              sx={{ textAlign: "center", fontWeight: "bold" }}
            >
              Password should be at least 6 characters
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 3 }}
              onSubmit={handleSubmit((data) => {
                handleClick(data);
              })}
              autoComplete="off"
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CssTextField
                    fullWidth
                    sx={{
                      mb: "12px",
                    }}
                    type={showPassword ? "text" : "password"}
                    error={errors.pass}
                    helperText={
                      errors.pass
                        ? errors.pass.type === "required"
                          ? "This field is required."
                          : errors.pass.type === "pattern"
                          ? "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters."
                          : null
                        : null
                    }
                    {...register("pass", {
                      required: true,
                      pattern: regPassword,
                    })}
                    label="Set Your Password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleTogglePasswordVisibility}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CssTextField
                    fullWidth
                    sx={{ mb: "12px" }}
                    type={showPassword ? "text" : "password"}
                    error={errors.confirmpass}
                    helperText={
                      errors.confirmpass
                        ? errors.confirmpass.type === "required"
                          ? "This field is required."
                          : errors.confirmpass.type === "pattern"
                          ? "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters."
                          : null
                        : null
                    }
                    {...register("confirmpass", {
                      required: true,
                      pattern: regPassword,
                    })}
                    label="Confirm Your Password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleTogglePasswordVisibility}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Stack sx={{ justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      width: "100%",
                      mr: "auto",
                      ml: "auto",
                      borderRadius: " 15px",
                      p: "15px 30px",
                      background: "#9D7D43",
                      color: "white",
                      "&:hover": {
                        boxShadow:
                          "6px -2px 28px 1px #81561f, -13px 7px 50px 1px #3b481f",
                        background: "#9D7D43",
                      },
                      mt: 3,
                      mb: 5,
                    }}
                    disabled={loading === true ? true : false}
                  >
                    Update Password
                  </Button>
                </Stack>
              </Grid>
            </Box>
          </Box>
        </Box>
        <Dialog open={loading} aria-labelledby="responsive-dialog-title">
          <DialogContent sx={{ py: 6, px: 16 }}>
            <PacmanLoader
              color="#36d7b7"
              cssOverride={{}}
              loading
              margin={7}
              size={30}
              speedMultiplier={0.8}
            />
          </DialogContent>
        </Dialog>
      </Container>
      <ToastContainer />
    </Box>
  );
};

export default SignUp;
