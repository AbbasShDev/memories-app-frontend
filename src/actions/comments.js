import {
  CREATE_COMMENT,
  START_LOADING_COMMENTS,
  END_LOADING_COMMENTS,
  FETCH_All_COMMENTS,
} from "../constants/actionTypes";
import * as api from "../api";

export const getComments = (commentsInfo) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_COMMENTS });

    const { data } = await api.fetchComments(commentsInfo);

    dispatch({ type: END_LOADING_COMMENTS });

    dispatch({ type: FETCH_All_COMMENTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// export const getPost = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: START_LOADING });

//     const { data } = await api.fetchPost(id);

//     dispatch({ type: END_LOADING });

//     dispatch({ type: FETCH_POST, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const createComment = (newComment) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_COMMENTS });

    const { data } = await api.createComment(newComment);

    dispatch({ type: CREATE_COMMENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
