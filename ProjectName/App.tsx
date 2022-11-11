/**
 ** FalconIT template for React Native App
 * https://github.com/falconitconsultant
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Snackbar from 'src/Components/Snackbar';
import Navigations from 'src/Navigations';
import { persistor, store } from 'src/Redux/ConfigureStore';
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle="dark-content"
          translucent
        />
        <Navigations />
        <Snackbar />
      </PersistGate>
    </Provider>
  );
};

export default App;
