import {LayoutAnimation, PermissionsAndroid, ToastAndroid} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';
import {ENV} from './env';
import globalStyles from './globalStyles';

export const LayoutAnimate = (time = 500) => {
  LayoutAnimation.configureNext({
    duration: time,
    create: {
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {type: LayoutAnimation.Types.easeInEaseOut},
  });
};

export const handleColorOpacity = (c, o = 100) => {
  let opacity = o % 100;
  opacity = opacity > 9 ? opacity : opacity + '0';
  return `${c}${o === 100 ? '' : opacity === 0 ? '00' : opacity}`;
};

export const objectClone = data => {
  try {
    return JSON.parse(JSON.stringify(data));
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const prettierJSON = (...arg) => {
  console.log(
    arg
      .map(item =>
        typeof item === 'object' ? JSON.stringify(item, null, 2) : item,
      )
      .join(',  '),
  );
};

export const EnableSnackBar = ({data, config}, success = true) => {
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

export const GetArray = arr => (Array.isArray(arr) ? arr : [arr]);
export const assetsURL = url => ({uri: ENV.resourceURL + '/' + url});
