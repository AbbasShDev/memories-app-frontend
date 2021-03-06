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
  CREATE_COMMENT,
  START_LOADING_COMMENTS,
  END_LOADING_COMMENTS,
} from "../constants/actionTypes";

export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case START_LOADING_COMMENTS:
      return { ...state, isLoadingComments: true };
    case END_LOADING_COMMENTS:
      return { ...state, isLoadingComments: false };
    case FETCH_All:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_POST:
      return {
        ...state,
        post: action.payload.post,
        posts: action.payload.recommendedPosts,
      };
    case FETCH_BY_SEARCH:
      return {
        ...state,
        posts: action.payload,
      };
    case CREATE_COMMENT:
      return {
        ...state,
        isLoading: false,
        post: action.payload,
      };
    case CREATE_POST:
      return { posts: [...state.posts, action.payload], ...state };
    case UPDATE_POST:
    case LIKE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    default:
      return state;
  }
};
