import {combineReducers} from 'redux';

const reducers = combineReducers({
  auth: () => null,
});
export const reducersArray = ['colorSelection', 'images', 'effects', 'addText'];
export default reducers;
