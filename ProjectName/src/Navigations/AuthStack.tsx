import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TAuthStack } from './types';
import Login from 'src/Screens/Login';
const Stack = createStackNavigator<TAuthStack>();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
