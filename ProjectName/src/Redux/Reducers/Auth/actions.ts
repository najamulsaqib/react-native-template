import { showSnackbar } from 'src/Components/Snackbar';
import { getRedux } from 'src/Redux/function';

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGIN = 'USER_LOGIN';

export const LOGIN = () => {
  const { dispatch } = getRedux();
  dispatch({
    type: USER_LOGIN,
  });
  showSnackbar({ type: 'success', body: 'Login Successful', header: 'Login' });
};

export const LOGOUT = () => {
  const { dispatch } = getRedux();
  dispatch({
    type: USER_LOGOUT,
  });
  showSnackbar({ type: 'error', body: 'Logout Successful', header: 'Logout' });
};
