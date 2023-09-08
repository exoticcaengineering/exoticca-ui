export interface YoYoBarProps {
  phoneNumber?: string;
  interval: number;
  cardData: YoYoBarCardDataType[];
  offsetHideBar: number;
  styling: PromotionStylingYoBar;
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
  backgroundColor: string;
}
