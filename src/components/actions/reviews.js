const reviewsRequest = () => ({
    type: "REVIEWS_REQUEST"
});
  
const reviewsRequestSuccess = payload => ({
    type: "REVIEWS_REQUEST_SUCCESS",
    payload
});
  
const reviewsRequestFail = error => ({
    type: "REVIEWS_REQUEST_FAIL",
    error
});

export const getReviews = () => async dispatch => {
    dispatch(reviewsRequest());
    try {
      const { data } = await request();  
      dispatch(reviewsRequestSuccess(data));
    } catch (error) {
      dispatch(reviewsRequestFail(error));
    }
};