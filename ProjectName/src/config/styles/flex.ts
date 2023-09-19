import {StyleSheet} from 'react-native';

export const FlexStyles = StyleSheet.create({
  flexBase: {
    flex: 1,
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexStart: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  flexEnd: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  flexSpaceBetween: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  flexSpaceAround: {
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  flexSpaceEvenly: {
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  flexJustifyCenter: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  alignCenter: {
    alignItems: 'center',
  },
});

export type FlexType = keyof typeof FlexStyles;
