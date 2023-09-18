import {heightRef, widthRef} from './screenSize';
export const MEDIA_HEIGHT = 295 * heightRef;
const globalStyles = {
  Theme: {
    backgroundColor: 'white',
    PrimaryColor: '#212A6B',
    AccentPrimaryColor: '#EF4D97',
    SecondaryColor: '#3AC4F4',
    TextBackgroundColor: '#F4F8FF',
    rippleColor: '#fcba03',
  },

  image: (height = '100%', width = '100%') => ({
    width: typeof width === 'string' ? width : width * widthRef,
    height: typeof height === 'string' ? height : height * heightRef,
    resizeMode: 'contain',
  }),
  text: (
    fontSize = 14 * heightRef,
    fontWeight = 'normal',
    color = 'black',
  ) => ({
    fontSize,
    fontWeight,
    color,
  }),
  center: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editView: {
    height: MEDIA_HEIGHT,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
};
export default globalStyles;

type HexColor = string & {_?: any};

export type TColors = keyof typeof globalStyles.Theme | HexColor;
