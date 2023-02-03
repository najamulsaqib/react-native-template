import React from 'react';
import Header from 'src/Components/Header';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import { THomeScreen } from 'src/Navigations/types';
import { LOGOUT } from 'src/Redux/Reducers/Auth/actions';
const Home: THomeScreen = ({}) => {
  return (
    <View flexLayout={['flexBase', 'flexCenter']}>
      <Header />
      <Text onPress={LOGOUT} typography={'bold'}>
        HOME SCREEN
      </Text>
    </View>
  );
};

export default Home;
