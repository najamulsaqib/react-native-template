import {StyleSheet} from 'react-native';
import {fontRef} from '../screenSize';

export const TypographyStyles = StyleSheet.create({
  bold: {
    fontWeight: '700',
  },
  h1: {
    fontSize: 35 * fontRef,
    fontWeight: '700',
  },
  h2: {
    fontSize: 25 * fontRef,
    fontWeight: '700',
  },
  h3: {
    fontSize: 18 * fontRef,
    fontWeight: '700',
  },
  h4: {
    fontSize: 16 * fontRef,
    fontWeight: '700',
  },
  h5: {
    fontSize: 14 * fontRef,
    fontWeight: '700',
  },
  h6: {
    fontSize: 12 * fontRef,
    fontWeight: '700',
  },
  p: {
    fontSize: 15 * fontRef,
    fontWeight: '400',
  },
  heading: {
    fontSize: 35 * fontRef,
  },
  normal: {
    fontSize: 25 * fontRef,
  },
  a: {
    fontSize: 14 * fontRef,
    fontWeight: '400',
  },
  small: {
    fontSize: 13 * fontRef,
  },
  code: {
    fontSize: 13 * fontRef,
  },
  link: {
    fontSize: 13 * fontRef,
  },
});

export type TypographyType = keyof typeof TypographyStyles;
