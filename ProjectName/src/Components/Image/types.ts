import { ImageProps } from 'react-native';

export interface IImage extends ImageProps {
  size?: number;
  height?: number | string;
  width?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  color?: string;
  border?: boolean;
  bgColor?: string;
}
