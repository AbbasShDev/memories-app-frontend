import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Input = ({
  name,
  label,
  autoFocus,
  type,
  half,
  handelChange,
  handelShowPassword,
}) => {
  return (
    <Grid item sx={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handelChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={
          name === "password" && {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handelShowPassword}>
                  {type === "password" ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }
        }
      ></TextField>
    </Grid>
  );
};

export default Input;
