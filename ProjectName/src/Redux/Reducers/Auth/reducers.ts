import { USER_LOGIN, USER_LOGOUT } from './actions';
import { TAuth } from './types';

const initialState: TAuth = {
  isLoggedIn: false,
  user: null,
  token: null,
};

const authReducers = (state: TAuth = initialState, action: any): TAuth => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducers;
