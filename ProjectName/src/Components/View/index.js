import React from 'react';
import {View as RNView, ViewProps} from 'react-native';

const View = ({children, ...rest}: ViewProps) => {
  return <RNView {...rest}>{children}</RNView>;
};

export default View;
