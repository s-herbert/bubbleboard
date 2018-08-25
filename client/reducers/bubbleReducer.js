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
  inputString: '',
};


const bubbleReducer = (state=initialState, action) => {
  const stateCopy = JSON.parse(JSON.stringify(state));

  switch(action.type) {
    case types.LOAD_BUBBLES:
      let obj = JSON.parse(stateCopy.inputString);
      console.log('input: ' ,stateCopy.inputString);
      stateCopy.inputJSON = obj;
      return stateCopy;
    case types.INPUT_CHANGE:
      console.log('input change:' ,action.payload)
      stateCopy.inputString = action.payload;
      return stateCopy;
    default:
      return state;
  }
};

export default bubbleReducer;