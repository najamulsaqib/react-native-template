import React from 'react';
import {View as RNView} from 'react-native';
import Animated from 'react-native-reanimated';
import {heightRef, widthRef} from 'src/config/screenSize';
import {FlexStyles} from 'src/config/styles';
import {Props} from './types';

const View = ({
  children,
  style,
  flexLayout = 'flexStart',
  height,
  width,
  size,
  animated = false,
  ...rest
}: Props) => {
  const VIEW = (!animated ? RNView : Animated.View) as React.ElementType;
  return (
    <VIEW
      {...rest}
      style={[
        Array.isArray(flexLayout)
          ? flexLayout.map(f => FlexStyles[f])
          : FlexStyles[flexLayout],
        height !== undefined && {
          height: typeof height === 'string' ? height : height * heightRef,
        },
        width !== undefined && {
          width: typeof width === 'string' ? width : width * widthRef,
        },
        size !== undefined && {
          height: size * heightRef,
          width: size * heightRef,
        },
        style,
      ]}>
      {children}
    </VIEW>
  );
};

export default View;
