import React, { useEffect, useState } from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import RNSnackbar from 'rn-animated-snackbar';
import globalStyles from 'src/config/globalStyles';
import { heightRef } from 'src/config/screenSize';

const Snackbar = () => {
  const [state, setState] = useState({
    visible: false,
    config: {},
    textStyle: {},
    data: '',
  });

  useEffect(() => {
    let listener = EventRegister.addEventListener(
      'showSnackbar',
      ({ data = '', config = {}, success = true, textStyle = {} }) => {
        if (config.top === undefined) {
          config.bottom = 30;
        }
        setState(s => ({
          ...s,
          visible: true,
          data: JSON.stringify(data).split('"').join(''),
          config: {
            backgroundColor: success
              ? globalStyles.Theme.PrimaryColor
              : globalStyles.Theme.SecondaryColor,
            ...config,
          },
          textStyle: { ...textStyle },
        }));
      },
    );
    return () => listener;
  }, []);
  return (
    <RNSnackbar
      visible={state.visible}
      onDismiss={() => setState(s => ({ ...s, visible: false }))}
      text={state.data}
      textStyle={state.textStyle}
      duration={RNSnackbar.LENGTH_SHORT}
      containerStyle={[styles.snackbarContainer, state.config]}
    />
  );
};

export default Snackbar;

const styles = StyleSheet.create({
  snackbarContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    borderRadius: heightRef * 15,
    zIndex: 1000,
    borderColor: 'white',
    borderWidth: heightRef,
  },
});

type TSnackBar = {
  data: string;
  config?: ViewStyle;
  textStyle?: TextStyle;
  success?: boolean;
};

export const showSnackbar = ({
  data = '',
  config = {},
  textStyle = {},
  success = true,
}: TSnackBar) => {
  EventRegister.emit('showSnackbar', { data, config, success, textStyle });
};
