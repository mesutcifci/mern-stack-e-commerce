import { useState } from "react";
import { useNavigate } from "react-router-dom";

// firebase
import { auth, db, provider } from "../../firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

// styles
import {
  Stack,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  InputAdornment,
} from "@mui/material";

import {
  Facebook as FacebookIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

import { GmailIcon } from "../../ui/";

// formik
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import { resolve } from "path";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const initialValues = { email: "", password: "", confirmPassword: "" };

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleClickPasswordIcon = () => {
    setIsPasswordShown((previousState) => !previousState);
  };

  const checkUserExistInDB = async (userId: string) => {
    const docRef = doc(db, "users", userId);
    const user = await getDoc(docRef);
    return user.exists();
  };

  const loginWithGmail = async () => {
    setLoading(true);
    try {
      const { user } = await signInWithPopup(auth, provider);
      const isUserExistInDB = await checkUserExistInDB(user.uid);
      if (!isUserExistInDB) {
        const userData = {
          id: user.uid,
          email: user.email,
          fullName: user.displayName,
          productsForUser: [],
          favoriteProductIds: [],
          productsInCart: [],
        };
        await setDoc(doc(db, "users", user.uid), userData);
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const loginWithEmail = async (values: {
    email: string;
    password: string;
  }) => {
    setLoading(true);
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Stack
      alignItems="center"
      sx={{
        padding: "16px",
        "& form": {
          display: "flex",
          flexDirection: "column",
          rowGap: "15px",
          width: "100%",
          maxWidth: "448px",
        },
        "& .MuiOutlinedInput-root": {
          borderRadius: "56px",
          borderColor: "#D8D8D8",
        },
      }}
    >
      <Typography
        sx={{ fontSize: "22px", fontWeight: "500", marginBottom: "24px" }}
      >
        Login
      </Typography>
      <Typography
        sx={{
          fontSize: "13px",
          fontWeight: "200",
          lineHeight: "25px",
          maxWidth: "358px",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={loginWithEmail}
      >
        {() => (
          <Form id="loginForm" noValidate>
            <Field
              disabled={loading}
              component={TextField}
              type="email"
              name="email"
              label="Email"
            />
            <Field
              disabled={loading}
              component={TextField}
              type={isPasswordShown ? "text" : "password"}
              name="password"
              label="Password"
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    onClick={handleClickPasswordIcon}
                    sx={{ cursor: "pointer" }}
                  >
                    {isPasswordShown ? <Visibility /> : <VisibilityOff />}
                  </InputAdornment>
                ),
              }}
            />
            <FormGroup
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                "& label": { width: "max-content", marginRight: "0" },
              }}
            >
              <Field
                component={FormControlLabel}
                control={<Checkbox />}
                label="Keep me signed in"
                sx={{ "& span": { fontSize: "13px", fontWeight: "300" } }}
              />
              <Typography
                sx={{
                  fontSize: "13px",
                  width: "max-content",
                  fontWeight: "300",
                  color: "#808080",
                  cursor: "pointer",
                }}
              >
                Forgot password?
              </Typography>
            </FormGroup>
          </Form>
        )}
      </Formik>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          width: "100%",
          marginTop: "32px",
        }}
      >
        <Button
          disabled={loading}
          variant="contained"
          sx={{
            width: { xs: "100%", sm: "214px" },
            maxWidth: { xs: "400px" },
            height: "56px",
            borderRadius: "56px",
            display: "flex",
            alignItems: "center",
            columnGap: "22.6px",
            backgroundColor: "#3B5998",
          }}
        >
          <FacebookIcon />
          <Typography
            sx={{
              textTransform: "capitalize",
              fontWeight: "500",
              fontSize: "13px",
            }}
          >
            Facebook
          </Typography>
        </Button>
        <Button
          disabled={loading}
          onClick={loginWithGmail}
          variant="contained"
          sx={{
            width: { xs: "100%", sm: "214px" },
            maxWidth: { xs: "400px" },
            height: "56px",
            borderRadius: "56px",
            display: "flex",
            alignItems: "center",
            columnGap: "22.6px",
            backgroundColor: "#fdfdfd",
            borderColor: "#F1584D",
            "&:hover": {
              backgroundColor: "#ffffff",
              borderColor: "#F1584D",
            },
          }}
        >
          <GmailIcon
            id="gmailIcon"
            sx={{ marginBottom: "-7px", marginLeft: "-24px" }}
          />
          <Typography
            sx={{
              textTransform: "capitalize",
              color: "#000000",
              fontWeight: "500",
              fontSize: "13px",
            }}
          >
            Gmail
          </Typography>
        </Button>
      </Box>
      <Button
        variant="contained"
        form="loginForm"
        type="submit"
        sx={{
          width: "100%",
          maxWidth: { xs: "400px", sm: "448px" },
          height: "56px",
          borderRadius: "56px",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#FBB03B",
          marginTop: "20px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#ffb53d",
          },
          fontSize: "13px",
        }}
      >
        Sign in
      </Button>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          columnGap: "30px",
          marginTop: "22px",
        }}
      >
        <Typography sx={{ fontSize: "14px", fontWeight: "300" }}>
          Not a member yet?
        </Typography>
        <Typography
          sx={{ fontSize: "14px", fontWeight: "500", cursor: "pointer" }}
        >
          Sign up
        </Typography>
      </Box>
    </Stack>
  );
};

export default Login;