import React from 'react';
import Home from 'src/Screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { TScreen, THomeStack } from './types';
const Stack = createStackNavigator<THomeStack>();

const screens: TScreen<THomeStack>[] = [
  {
    key: 'home',
    name: 'Home',
    component: Home,
    // options: { headerShown: false },
  },
];

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home">
      {screens.map(s => (
        <Stack.Screen
          key={s.key}
          name={s.name}
          component={s.component}
          options={s?.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default HomeStack;
