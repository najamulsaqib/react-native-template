/**
 ** FalconIT template for React Native App
 * https://github.com/falconitconsultant
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { LogBox, StatusBar } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Snackbar from 'src/Components/Snackbar';
import Navigations from 'src/Navigations';
import { persistor, store } from 'src/Redux/ConfigureStore';
LogBox.ignoreAllLogs();

const App = () => {
  useEffect(() => changeNavigationBarColor('translucent', false), []);
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
