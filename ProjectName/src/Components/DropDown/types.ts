import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export type DropDownProps = React.ComponentProps<typeof DropDownPicker> & {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;

  primaryDropDownContainerStyle?: StyleProp<ViewStyle>;
  customDropDownContainerStyle?: StyleProp<ViewStyle>;
};

export const defaultProps = {
  title: '',
  titleStyle: {},
};
