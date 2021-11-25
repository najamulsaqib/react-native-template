import React from 'react';
import {View as RNView, ViewProps} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import View from '../View';

const Header = () => {
  const inset = useSafeAreaInsets();
  return (
    <View>
      <View style={{height: inset.top, width: '100%'}} />
    </View>
  );
};

export default Header;
