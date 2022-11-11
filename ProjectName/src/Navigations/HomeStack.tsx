import React from 'react';
import Home from 'src/Screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { THomeStack } from './types';
const Stack = createStackNavigator<THomeStack>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
