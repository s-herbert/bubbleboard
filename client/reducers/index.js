/**
 * ************************************
 *
 * @module  index.js
 * @author  seano
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';

// import all reducers here
import bubbleReducer from './bubbleReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  bubble: bubbleReducer,
});

// make the combined reducers available for import
export default reducers;