import initialState from "../store/initialState";
import * as types from "../actions/reviews";

export default (state = initialState.reviews, { type, payload, status }) => {
  switch (type) {
    case types.REVIEWS_REQUEST: {        
        return { ...state, error: false, isFetching: true };
    }
    case types.REVIEWS_REQUEST_SUCCESS: {        
        return { ...state, comments: payload, isFetching: false };
    }
    case types.REVIEWS_REQUEST_FAIL: {        
        return { ...state, error: true, isFetching: false };
    }

    case types.ADD_REVIEWS_REQUEST: {        
        return { ...state, errorAddComment: false, isFetchingComment: true, status };
    }
    case types.ADD_REVIEWS_REQUEST_SUCCESS: {
        let newCommentsArray = [...state.comments] 
        newCommentsArray.push(payload)
        return { ...state, comments: newCommentsArray, isFetchingComment: false, status };
    }
    case types.ADD_REVIEWS_REQUEST_FAIL: {        
        return { ...state, errorAddComment: true, isFetchingComment: false, status };
    }
    
    default:
      return state;
  }
};