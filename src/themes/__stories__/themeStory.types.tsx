import { Colors, FontFamily } from 'src/types/theme';

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
