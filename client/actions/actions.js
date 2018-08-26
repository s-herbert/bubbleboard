/**
 * ************************************
 *
 * @module  actions.js
 * @author seano 
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes'

export const loadJSON = (json) => {
  console.log("loadJSON action creator called");
  return {
  type: types.LOAD_BUBBLES,
  payload: json,
  }
};