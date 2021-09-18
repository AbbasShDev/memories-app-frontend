import { AUTH } from "../constants/actionTypes";

export const googleSignIn = (res) => async (dispatch) => {
  const result = res?.profileObj;
  const token = res?.tokenId;

  try {
    dispatch({ type: AUTH, payload: { result, token } });
  } catch (error) {
    console.log(error);
  }
};
