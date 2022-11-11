import { showSnackbar } from 'src/Components/Snackbar';
import { getRedux } from 'src/Redux/function';

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGIN = 'USER_LOGIN';

export const LOGIN = () => {
  const { dispatch } = getRedux();
  dispatch({
    type: USER_LOGIN,
  });
  showSnackbar({ data: 'LOGIN Snackbar' });
};

export const LOGOUT = () => {
  const { dispatch } = getRedux();
  dispatch({
    type: USER_LOGOUT,
  });
  showSnackbar({ data: 'LOGOUT Snackbar', success: false });
};
