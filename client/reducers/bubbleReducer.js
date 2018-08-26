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

import * as types from "../constants/actionTypes";
import RJSON from "relaxed-json";

const initialState = {
  inputJSON: {},
  inputString: "",
  renderBoard: false
};

const bubbleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_BUBBLES:
      console.log('bubblifying: ', state.inputString);
      let inputJSON = RJSON.parse(state.inputString);
      return {...state,
        inputJSON,
        renderBoard: true
      };
    case types.INPUT_CHANGE:
      console.log('newState.inputString: ', action.payload)
      return { ...state,
        inputString: action.payload,
        renderBoard: false
      };
    default:
      return state;
  }
};

export default bubbleReducer;
