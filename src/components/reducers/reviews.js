import initialState from "../store/initialState";

export default (state = initialState.reviews, { type, payload }) => {
  switch (type) {
    case "REVIEWS_REQUEST": {        
        return { ...state, isFetching: true };
    }
    case "REVIEWS_REQUEST_SUCCESS": {
        const {comments} = payload;
        return { ...state, comments, isFetching: false };
    }
    case "REVIEWS_REQUEST_FAIL": {
        const {comments} = payload;
        return { ...state, comments, isFetching: false };
    }

    default:
      return state;
  }
};