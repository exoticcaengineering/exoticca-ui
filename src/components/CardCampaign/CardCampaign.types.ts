import React from 'react';
import { ComponentPropsBase } from 'src/types/ComponentPropsBase';

export const PROMOTED_ALIAS = 'PROMOTED';
export const NEW_ALIAS = 'New';
export const FLASH_SALES_ALIAS = 'Flash Sale';

export interface StyledProps extends ComponentPropsBase {
  isPromotedProduct?: boolean;
  hasBorder?: boolean;
  hasMargin?: boolean;
  hasBorderRadius?: boolean;
}

export interface Tag {
  uuid: string;
  alias: string;
  name: string;
  category?: string;
  uri?: string;
  description?: string;
  slug?: string;
}

export interface CardCampaignProps {
  id: string;
  image: { text: string; url: string }[];
  destination: string;
  title: string;
  fromPriceBeautify: string;
  url: string;
  tagHeadLine: Tag[];
  isNew: boolean;
  isPromoted: boolean;
  isFlashSales: boolean;
  daysText: string;
  fromText: string;
  newText: string;
  WishlistBtn: React.ReactNode;

  // Optional
  pillTagClickEvent?: (e: React.MouseEvent, url: string) => void;
  hasExtraNights?: boolean;
  pricingPercentage?: string;
  oldPrice?: string;
  hasBorder?: boolean;
  hasMargin?: boolean;
  hasBorderRadius?: boolean;
}
