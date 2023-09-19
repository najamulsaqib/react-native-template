import {LayoutAnimation, PermissionsAndroid, ViewStyle} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';
import {ENV} from './env';
import globalStyles from './globalStyles';

export const LayoutAnimate = (time: number = 500) => {
  LayoutAnimation.configureNext({
    duration: time,
    create: {
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {type: LayoutAnimation.Types.easeInEaseOut},
  });
};

export const handleColorOpacity = (c: string, o = 100) => {
  let opacity: string | number = o % 100;
  opacity = opacity > 9 ? opacity : opacity + '0';
  return `${c}${o === 100 ? '' : opacity === 0 ? '00' : opacity}`;
};

export const objectClone = (data: any) => {
  try {
    return JSON.parse(JSON.stringify(data));
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const prettierJSON = (...arg: any) => {
  console.log(
    arg
      .map((item: any) =>
        typeof item === 'object' ? JSON.stringify(item, null, 2) : item,
      )
      .join(',  '),
  );
};

export const EnableSnackBar = (
  {data, config}: {data: string; config: ViewStyle},
  success = true,
) => {
  let snackConfig = {
    ...config,
    backgroundColor: success ? globalStyles.Theme.PrimaryColor : 'red',
  };
  EventRegister.emit('snackbar', {
    data,
    config: snackConfig,
  });
};

export const hasAndroidPermission = async () => {
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
};

export const GetArray = (arr: [] | string) =>
  Array.isArray(arr) ? arr : [arr];
export const assetsURL = (url: string) => ({
  uri: ENV.resourceURL + '/' + url,
});

export const getError: (res: any) => string = res =>
  res.response?.data?.message || res.message || 'Something went wrong.';
