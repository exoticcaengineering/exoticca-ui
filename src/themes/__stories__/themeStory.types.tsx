import { ColorShade, FontFamily, Palette } from 'src/types/theme';

export interface ColorBlockProps {
  colorName: keyof Palette;
  colorShade: keyof ColorShade;
  colorValue: string;
}
export interface ColorPaletteProps {
  colors: Palette;
}

export interface TypographyContainerProps {
  fontFamily: FontFamily;
}
