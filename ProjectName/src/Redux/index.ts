import { combineReducers } from 'redux';
import auth from './Reducers/Auth/reducers';

const reducers = combineReducers({
  auth,
});
export default reducers;
