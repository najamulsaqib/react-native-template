import React, {useEffect, useRef} from 'react';
import DropdownAlert, {
  CloseActionType,
  DropdownAlertType,
} from 'react-native-dropdownalert';
import {EventRegister} from 'react-native-event-listeners';

const Snackbar = () => {
  let dropDownAlertRef = useRef();

  useEffect(() => {
    let id = EventRegister.addEventListener(
      'showSnackbar',
      ({type, header, body, action, interval}) => {
        // @ts-ignore
        dropDownAlertRef.alertWithType(type, header, body, action, interval);
      },
    );
    return () => {
      // @ts-ignore
      EventRegister.removeEventListener(id);
    };
  }, []);
  return (
    <DropdownAlert
      ref={ref => {
        if (ref) {
          //@ts-ignore
          dropDownAlertRef = ref;
        }
      }}
      inactiveStatusBarBackgroundColor="transparent"
      inactiveStatusBarStyle="dark-content"
      translucent
    />
  );
};

export default Snackbar;

type TSnackBar = {
  type: DropdownAlertType;
  header: string;
  body: string;
  success?: boolean;
  action?: CloseActionType;
  interval?: number; // duration in milliseconds
};

export const showSnackbar = ({
  type = 'info',
  header,
  body,
  action = 'automatic',
  interval = 1000,
}: TSnackBar) => {
  EventRegister.emit('showSnackbar', {type, header, body, action, interval});
};

// DOCS-https://github.com/testshallpass/react-native-dropdownalert/blob/master/docs/PROPS.md
