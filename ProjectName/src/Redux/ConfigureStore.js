import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, createStore} from 'redux';
import {persistReducer} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import thunk from 'redux-thunk';
import reducers from './index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ["auth"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

// export default function configureStore() {
//   return createStore(persistedReducer, applyMiddleware(thunk));
// }

let store = createStore(persistedReducer, applyMiddleware(thunk));
// let store = createStore(reducers, applyMiddleware(thunk));
let persistor = persistStore(store);
export {store, persistor};
