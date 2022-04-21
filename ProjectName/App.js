/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import HomeStack from 'src/Navigations/HomeStack';
import {persistor, store} from 'src/Redux/ConfigureStore';
import RNBootSplash from 'react-native-bootsplash';
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer
          onReady={() => {
            RNBootSplash.hide({fade: true});
          }}>
          <HomeStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
