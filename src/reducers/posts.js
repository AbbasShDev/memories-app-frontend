import {
  FETCH_All,
  FETCH_BY_SEARCH,
  CREATE_POST,
  UPDATE_POST,
  LIKE_POST,
  DELETE_POST,
} from "../constants/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_All:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      return {
        ...state,
        posts: action.payload.data,
      };
    case CREATE_POST:
      return [action.payload, ...state];
    case UPDATE_POST:
    case LIKE_POST:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE_POST:
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};
