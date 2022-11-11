import { ViewProps } from 'react-native';
import { AnimateProps } from 'react-native-reanimated';
import { FlexType } from 'src/config/styles';
interface IAnimatedViewProps extends AnimateProps<ViewProps> {
  flexLayout?: FlexType | FlexType[];
  width?: number | string;
  height?: number | string;
  size?: number;
  animated?: true;
}

interface IViewProps extends ViewProps {
  flexLayout?: FlexType | FlexType[];
  width?: number | string;
  height?: number | string;
  size?: number;
  animated?: false;
}
export type Props = IViewProps | IAnimatedViewProps;
