import React from 'react';
import { Palette, ColorShade } from 'src/types';

export interface YoYoBarProps {
  interval: number;
  cardData: YoYoBarCardDataType[];
  background: keyof Palette;
  backgroundShade?: keyof ColorShade;
  containerRef: React.RefObject<HTMLDivElement>;
  pillColor?: keyof Palette;
  textColor?: keyof Palette;
}

export interface YoYoBarCardDataType {
  desktopHtmlString: string;
  mobileHtmlString: string;
  tagText?: string;
  plusInfo?: string;
  isClickable: boolean;
  onClick?: () => void;
}

export interface PromotionStylingYoBar {
  ssr?: boolean;
  background?: string;
  backgroundGradient?: string;
  backgroundColor: keyof Palette;
}

export interface StyledProps {
  gradient?: string;
  isClickable?: boolean;
  interval?: number;
  backgroundColor?: keyof Palette;
  backgroundShade?: keyof ColorShade;
  pillColor?: keyof Palette;
  textColor?: keyof Palette;
}

export interface YoyoBarCarProps {
  styling?: PromotionStylingYoBar;
  isLastChance?: boolean;
  tagText: string | undefined;
  desktopHtmlString: string;
  mobileHtmlString: string;
  absolute?: boolean;
  onClick?: () => void;
  plusInfo?: string | undefined;
  interval: number;
  pillColor?: keyof Palette;
  textColor?: keyof Palette;
}
