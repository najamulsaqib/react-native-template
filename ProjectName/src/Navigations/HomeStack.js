import React from 'react';
import Home from 'src/Screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
