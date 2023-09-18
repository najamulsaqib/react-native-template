import {store} from './ConfigureStore';

export const getRedux = () => {
  const dispatch = store.dispatch;
  const state = store.getState();
  return {dispatch, state};
};
