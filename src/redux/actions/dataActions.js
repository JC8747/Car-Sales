import constants from "../constants";

export const removeFeature = item => dispatch => {
  dispatch({
    type: constants.REMOVE,
    payload: item
  });
};

export const buyItem = item => dispatch => {
  dispatch({
    type: constants.BUY,
    payload: item
  });
};