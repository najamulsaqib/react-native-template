import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import HomeStack from './HomeStack';
import { useAppSelector } from 'src/Helper/Hooks/reduxHooks';
import AuthStack from './AuthStack';

const Navigations = () => {
  const isLoggedIn = useAppSelector(s => s.auth.isLoggedIn);
  return (
    <NavigationContainer
      onReady={() => {
        RNBootSplash.hide({ fade: true });
      }}>
      {isLoggedIn ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigations;
