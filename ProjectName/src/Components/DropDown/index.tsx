/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import globalStyles from 'src/config/globalStyles';
import Text from '../Text';
import View from '../View';
import {defaultProps, DropDownProps} from './types';

const DropDown = (props: DropDownProps) => {
  return (
    <View>
      <Text style={props.titleStyle}>{props.title}</Text>
      <View
        style={[
          {
            borderBottomWidth: 1,
            borderBottomColor: props.disabled
              ? globalStyles.Theme.PrimaryColor
              : globalStyles.Theme.SecondaryColor,
          },
          props.primaryDropDownContainerStyle,
        ]}>
        <DropDownPicker
          placeholderStyle={[
            {
              fontSize: 14,
              color: '#AAAAAA',
              ...(props.disabled && {
                color: globalStyles.Theme.SecondaryColor,
              }),
            },
            props.placeholderStyle,
          ]}
          ArrowDownIconComponent={() => (
            <Icon
              type={IconType.MaterialIcons}
              name="arrow-drop-down"
              size={30}
              color={globalStyles.Theme.SecondaryColor}
            />
          )}
          ArrowUpIconComponent={() => (
            <Icon
              type={IconType.MaterialIcons}
              name="arrow-drop-up"
              size={30}
              color={globalStyles.Theme.SecondaryColor}
            />
          )}
          itemSeparator
          itemSeparatorStyle={[
            {
              backgroundColor: 'rgba(0,0,0,0.1)',
            },
            props.itemSeparatorStyle,
          ]}
          dropDownContainerStyle={[
            {
              position: 'relative',
              top: 0,
              width: '95%',
              alignSelf: 'center',

              borderColor: '#A7AAB1',
              borderWidth: 0.2,
              borderTopColor: globalStyles.Theme.PrimaryColor,
              borderTopWidth: 1,
            },
            props.customDropDownContainerStyle,
          ]}
          selectedItemLabelStyle={[
            {
              fontWeight: 'bold',
              color: globalStyles.Theme.PrimaryColor,
            },
            props.selectedItemLabelStyle,
          ]}
          containerProps={{
            style: {
              marginHorizontal: -10,
              marginVertical: -5,
            },
            ...props.containerProps,
          }}
          style={[
            {
              borderWidth: 0,
              backgroundColor: 'transparent',
            },
            props.style,
          ]}
          textStyle={{
            ...(props.disabled && {
              color: globalStyles.Theme.SecondaryColor,
            }),
          }}
          {...props}
        />
      </View>
    </View>
  );
};

DropDown.defaultProps = defaultProps;
export default DropDown;
