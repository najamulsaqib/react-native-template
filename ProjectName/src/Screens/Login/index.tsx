import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import Assets from 'src/Assets';
import Image from 'src/Components/Image';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import { TAuthStack } from 'src/Navigations/types';
import { LOGIN } from 'src/Redux/Reducers/Auth/actions';
const Login = ({}: StackScreenProps<TAuthStack>) => {
  return (
    <View flexLayout={['flexBase', 'flexCenter']}>
      <Image source={Assets.logo} size={100} color={'PrimaryColor'} />
      <Text onPress={LOGIN} typography={'h1'} color={'SecondaryColor'}>
        AUTH SCREEN
      </Text>
    </View>
  );
};

export default Login;
