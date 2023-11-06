/**
 * @copyright Falcon Consulting
 * @author Najam Ul Saqib
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {LogBox, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Snackbar from 'src/Components/Snackbar';
import Navigation from 'src/Navigation';
import {persistor, store} from 'src/Redux/ConfigureStore';

LogBox.ignoreAllLogs();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle="dark-content"
          translucent
        />
        <Navigation />
        <Snackbar />
      </PersistGate>
    </Provider>
  );
}

export default App;
