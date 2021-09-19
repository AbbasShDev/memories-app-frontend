import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const googleSignIn = (res) => async (dispatch) => {
  const result = res?.profileObj;
  const token = res?.tokenId;

  try {
    dispatch({ type: AUTH, payload: { result, token } });
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, payload: data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, payload: data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
