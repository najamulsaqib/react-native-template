import {ParamListBase, RouteProp} from '@react-navigation/native';
import {
  StackNavigationOptions,
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';

export type TAuthStack = {
  Login: undefined;
};

export type THomeStack = {
  Home: undefined;
  // ScreenName: {
  //   propsToSend: string;
  // };
};

export type THomeScreen = React.FC<StackScreenProps<THomeStack>>;
export type TAuthScreen = React.FC<StackScreenProps<TAuthStack>>;

declare type ScreenComponentType<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList,
> =
  | React.ComponentType<{
      route: RouteProp<ParamList, RouteName>;
      navigation: StackNavigationProp<ParamList>;
    }>
  | React.ComponentType<{}>;

export type TScreen<Stack extends ParamListBase> = {
  //* commonly used.
  key: React.Key;
  name: keyof Stack;
  component: ScreenComponentType<Stack, keyof Stack>;
  options?: StackNavigationOptions;

  //? not commonly used.
  // navigationKey?: String;
  // listeners?: unknown;
  // getId?: ({ params }: { params: unknown }) => String | undefined;
  // initialParams?: Partial<Stack[keyof Stack]>;
  // children?: unknown;
};
