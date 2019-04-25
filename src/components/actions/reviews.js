export const REVIEWS_REQUEST = "REVIEWS_REQUEST";
export const REVIEWS_REQUEST_SUCCESS = "REVIEWS_REQUEST_SUCCESS";
export const REVIEWS_REQUEST_FAIL = "REVIEWS_REQUEST_FAIL";

const reviewsRequest = () => ({
    type: REVIEWS_REQUEST
});
  
const reviewsRequestSuccess = payload => ({
    type: REVIEWS_REQUEST_SUCCESS,
    payload
});
  
const reviewsRequestFail = error => ({
    type: REVIEWS_REQUEST_FAIL,
    error
});

export const getReviews = () => async dispatch => {
    dispatch(reviewsRequest());
    try {
      const comments = await fetch(`http://localhost:3000/comments`)
      .then(resp => resp.json())
          .then(data => data); 
      dispatch(reviewsRequestSuccess(comments));
    } catch (error) {
      dispatch(reviewsRequestFail(error));
    }
};

export const ADD_REVIEWS_REQUEST = "ADD_REVIEWS_REQUEST";
export const ADD_REVIEWS_REQUEST_SUCCESS = "ADD_REVIEWS_REQUEST_SUCCESS";
export const ADD_REVIEWS_REQUEST_FAIL = "ADD_REVIEWS_REQUEST_FAIL";

const addReviewsRequest = () => ({
    type: ADD_REVIEWS_REQUEST,
    status: "PENDING",
});
  
const addReviewsRequestSuccess = payload => ({
    type: ADD_REVIEWS_REQUEST_SUCCESS,
    status: "RESOLVED",
    payload
});
  
const addReviewsRequestFail = error => ({
    type: ADD_REVIEWS_REQUEST_FAIL,
    status: "REJECTED",
    error
});

export const addReview = (payload) => async dispatch => {
    dispatch(addReviewsRequest());
    try {
        const comments = await fetch(`http://localhost:3000/comments`,{
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "content-type": "application/json"
            }
        })
        .then(resp => resp.json())
            .then(data => data); 
      dispatch(addReviewsRequestSuccess(comments));
    } catch (error) {
      dispatch(addReviewsRequestFail(error));
    } 
};