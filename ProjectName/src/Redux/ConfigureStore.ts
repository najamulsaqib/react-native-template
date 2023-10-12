import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import {persistReducer} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import thunk from 'redux-thunk';
import {reduxStorage} from 'src/Helper/Storage';
import reducers from './index';

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
let store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);

export {store, persistor};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
