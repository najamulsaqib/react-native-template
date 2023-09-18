import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TAuthStack, TScreen} from './types';
import Login from 'src/Screens/Login';
const Stack = createStackNavigator<TAuthStack>();

const screens: TScreen<TAuthStack>[] = [
  {key: 'login', name: 'Login', component: Login},
];

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
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

export default AuthStack;
