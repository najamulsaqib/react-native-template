import { TextProps } from 'react-native';
import { TypographyType } from 'src/config/styles';

export interface ITextProps extends TextProps {
  color?: string;
  typography?: TypographyType;
  fontSize?: number;
  bold?: boolean;
  width?: string | number;
  paddingVertical?: number;
  marginTop?: number;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center' | undefined;
  textAlign?: 'left' | 'center' | 'right' | 'justify' | undefined;
}
