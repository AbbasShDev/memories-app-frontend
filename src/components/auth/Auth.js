import React, { useState } from "react";
import Input from "./Input";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const classess = useStyles();

  const handelSubmit = () => {};

  const handelChange = () => {};

  const handelShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handelShowPassword(false);
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
                  name="familyName"
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
          <Grid container justify="flex-end">
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
