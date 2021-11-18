import {
  FETCH_All,
  FETCH_BY_SEARCH,
  CREATE_POST,
  UPDATE_POST,
  LIKE_POST,
  DELETE_POST,
} from "../constants/actionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_All:
      return action.payload;
    case FETCH_BY_SEARCH:
      return action.payload;
    case CREATE_POST:
      return [action.payload, ...posts];
    case UPDATE_POST:
    case LIKE_POST:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE_POST:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};
