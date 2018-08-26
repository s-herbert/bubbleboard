/**
 * ************************************
 *
 * @module  bubbleReducer
 * @author seano
 * @date
 * @description reducer for bubble data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  inputJSON: {},
};


const bubbleReducer = (state=initialState, action) => {
  const stateCopy = JSON.parse(JSON.stringify(state));

  switch(action.type) {
    case types.LOAD_BUBBLES:
      stateCopy.inputJSON = action.payload;
      return stateCopy;
    default:
      return state;
  }
};

export default bubbleReducer;