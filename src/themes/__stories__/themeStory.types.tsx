import { Colors, FontFamily } from 'styled-components';

export interface ColorBlockProps {
  colorName: keyof Colors;
  colorValue: string;
}
export interface ColorPaletteProps {
  colors: Colors;
}

export interface TypographyContainerProps {
  fontFamily: FontFamily;
}
