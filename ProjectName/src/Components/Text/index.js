/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text as RNText, TextProps, TouchableOpacity} from 'react-native';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef} from 'src/config/screenSize';

const Text = ({
  color = globalStyles.Theme.PrimaryColor,
  fontSize = 14,
  bold,
  width,
  children,
  paddingVertical = 0,
  style,
  textAlignVertical = 'center',
  onPress,
  ...rest
}: TextProps) => {
  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <RNText
        style={[
          {
            color,
            fontWeight: bold !== undefined ? 'bold' : 'normal',
            fontSize: fontSize * fontRef,
            paddingVertical: paddingVertical * heightRef,
            textAlignVertical,
          },
          width !== undefined ? {width} : {},
          style,
        ]}
        {...rest}>
        {children}
      </RNText>
    </TouchableOpacity>
  );
};

export default Text;
