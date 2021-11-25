import {
  FETCH_All,
  FETCH_POST,
  FETCH_BY_SEARCH,
  CREATE_POST,
  UPDATE_POST,
  LIKE_POST,
  DELETE_POST,
  START_LOADING,
  END_LOADING,
  START_LOADING_COMMENTS,
  END_LOADING_COMMENTS,
  CREATE_COMMENT,
} from "../constants/actionTypes";
import * as api from "../api";

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchPosts(page);

    dispatch({ type: END_LOADING });

    dispatch({ type: FETCH_All, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchPost(id);

    console.log(data);
    dispatch({ type: END_LOADING });

    dispatch({ type: FETCH_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchPostsBySearch(searchQuery);

    dispatch({ type: END_LOADING });

    dispatch({ type: FETCH_BY_SEARCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (newPost, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.createPost(newPost);

    history.push(`/posts/${data._id}`);

    dispatch({ type: CREATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE_POST, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPostComments = (id, commentsInfo) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_COMMENTS });

    const { data } = await api.createPostComment(id, commentsInfo);

    dispatch({ type: END_LOADING_COMMENTS });

    dispatch({ type: CREATE_COMMENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
