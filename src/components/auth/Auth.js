import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { googleSignIn, signUp, signIn } from "../../actions/auth";
import Input from "./Input";
import GoogleIcon from "./GoogleIcon";
import useStyles from "./styles";

const initalFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initalFormData);
  const dispatch = useDispatch();
  const history = useHistory();
  const classess = useStyles();

  const handelSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signUp(formData, history));
    } else {
      dispatch(signIn(formData, history));
    }
  };

  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handelShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const googleSignInSuccess = async (res) => {
    dispatch(googleSignIn(res));
    history.push("/");
  };

  const googleSignInFailure = (error) => {
    console.log(error);

    console.log("Google login was unsuccessful");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classess.paper} elevation={3}>
        <Avatar className={classess.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classess.form} onSubmit={handelSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handelChange={handelChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Family Name"
                  handelChange={handelChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email"
              handelChange={handelChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handelChange={handelChange}
              type={showPassword ? "text" : "password"}
              handelShowPassword={handelShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handelChange={handelChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classess.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId="241545638141-j7ovrlblenp9atcb7kek0f5r0dsrumed.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classess.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<GoogleIcon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSignInSuccess}
            onFailure={googleSignInFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
