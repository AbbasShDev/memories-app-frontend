import {
  CREATE_COMMENT,
  START_LOADING_COMMENTS,
  END_LOADING_COMMENTS,
  FETCH_All_COMMENTS,
} from "../constants/actionTypes";

export default (state = { comments: [], isLoading: true }, action) => {
  switch (action.type) {
    case START_LOADING_COMMENTS:
      return { ...state, isLoading: true };
    case END_LOADING_COMMENTS:
      return { ...state, isLoading: false };
    case FETCH_All_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case CREATE_COMMENT:
      return { comments: [...state.comments, action.payload], ...state };
    default:
      return state;
  }
};
