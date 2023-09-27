import styled from 'styled-components';
import { StyledProps } from './CardCampaign.types';
import { TextBody2, TextHeading2 } from '../TypographyVariants';

export const Card = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.palette.primary.contrast};
  border-radius: ${({ theme }) => theme.newBorderRadius.l};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const CardLink = styled.a`
  display: block;
  text-align: initial;
  width: 100%;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.level1};
  &:hover img {
    transform: scale(1.015);
  }
`;

export const CardContent = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.contrast};
  padding: ${({ theme }) => theme.spacing(1.5)};
`;

export const HeaderWrapper = styled.div`
  position: relative;
  height: 225px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.newBreakpoints.phablet}) {
    height: 275px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    transition: transform 0.9s cubic-bezier(0.18, 0.74, 0.32, 1.01);
  }
  &:hover {
    img {
      transform: scale(1.03);
    }
  }
`;

export const HeaderContentWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: ${({ theme }) => theme.spacing(1)};
  width: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000);
  @media (min-width: ${({ theme }) => theme.newBreakpoints.phablet}) {
    padding: ${({ theme }) => theme.spacing(2)};
  }
`;

export const HeadingCard = styled.div`
  margin: 0;
`;

export const Destination = styled(TextHeading2)`
  color: ${(props) => props.theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing(0.5)};

  @media (min-width: ${(props) => props.theme.newBreakpoints.phablet}) {
    margin-bottom: initial;
  }
`;

export const Days = styled(TextBody2)`
  color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled(TextBody2)`
  margin-bottom: ${({ theme }) => theme.spacing(1.6)};
  min-height: 40px;

  @media (min-width: ${({ theme }) => theme.newBreakpoints.mobile}) {
    min-height: 44px;
    margin-bottom: ${({ theme }) => theme.spacing(1.2)};
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  align-items: baseline;
`;

export const PriceRow = styled.div`
  display: flex;
  margin-right: ${({ theme }) => theme.spacing(2)};
  width: 100%;
`;

export const PriceFrom = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.h5};
  margin-bottom: -${({ theme }) => theme.spacing(0.4)};
  margin-right: ${({ theme }) => theme.spacing(0.6)};
`;

export const PriceBeauty = styled(TextHeading2)`
  font-size: ${({ theme }) => theme.typography.fontSize.subtitle2};
  @media (min-width: ${(props) => props.theme.newBreakpoints.phablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.h3};
  }
`;

export const PriceBeforeBeauty = styled(PriceBeauty)`
  text-decoration: line-through;
  font-weight: ${(props) => props.theme.typography.fontWeight.normal};
  font-size: ${({ theme }) => theme.typography.fontSize.h5};

  @media (min-width: ${(props) => props.theme.newBreakpoints.phablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.default};
`;

export const PercentageSaving = styled.div<StyledProps>`
  margin-left: ${({ theme }) => theme.spacing(1)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.fontSize.body1};
  color: ${({ theme, isPromotedProduct }) =>
    isPromotedProduct
      ? theme.palette.promotion.contrast
      : theme.palette.primary.contrast};
  z-index: ${({ theme }) => theme.zIndex.level1};
  background: ${({ theme, isPromotedProduct }) =>
    isPromotedProduct
      ? theme.palette.promotion.main
      : theme.palette.primary.main};
  border-radius: ${(props) => props.theme.newBorderRadius.semiRounded};
  left: ${({ theme }) => theme.spacing(0.5)};
  padding: ${({ theme }) => theme.spacing(0.5)};

  @media (min-width: ${(props) => props.theme.newBreakpoints.phablet}) {
    padding: ${({ theme }) => theme.spacing(0, 0.7)};
    left: initial;
  }
`;

export const ThemePromoTagWrap = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.spacing(1)};
  top: 0px;
  @media (max-width: ${({ theme }) => theme.newBreakpoints.phablet}) {
    right: ${({ theme }) => theme.spacing(0.25)};
    top: ${({ theme }) => theme.spacing(1)};
  }
`;

export const ThemePromoTag = styled.div`
  white-space: nowrap;
  padding: ${({ theme }) => theme.spacing(0.7, 1.5)};
  width: max-content;
  height: fit-content;
  font-weight: normal;
  font-size: ${({ theme }) => theme.typography.fontSize.button3};
  text-transform: lowercase;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grey80};
  border: 1.5px solid;
  border-color: ${({ theme }) => theme.colors.arcticWind};
  z-index: ${({ theme }) => theme.zIndex.level1};
  background: ${({ theme }) => theme.colors.arcticWind};
  border-radius: ${({ theme }) => theme.newBorderRadius.semiRounded};
  overflow: hidden;
  max-width: fit-content;
  text-align: center;

  &:first-letter {
    text-transform: uppercase;
  }
`;

export const TagWrapper = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.spacing(0.5)};
  top: 0px;
  height: 24px;
  z-index: ${({ theme }) => theme.zIndex.level2};
  > span {
    margin-bottom: ${({ theme }) => theme.spacing(0.5)};
  }
  > a {
    margin-bottom: ${({ theme }) => theme.spacing(0.5)};
    display: block;
  }

  @media (min-width: ${({ theme }) => theme.newBreakpoints.phablet}) {
    right: 0;
    top: ${({ theme }) => theme.spacing(1)};
  }
`;

export const NewContent = styled.div<StyledProps>`
  text-transform: capitalize;
  background-color: ${({ theme }) => theme.colors.polarNight};
  max-height: 28px;
  color: ${({ theme }) => theme.colors.arcticWind};
  font-size: ${({ theme }) => theme.typography.fontSize.body1};
  text-align: center;
  border: ${({ theme, hasBorder }) =>
    hasBorder ? `1.5px solid ${theme.colors.arcticWind}` : 'none'};
  margin: ${({ hasMargin }) => (hasMargin ? '0px 1.5px 1.5px 1.5px' : '0px')};
  border-radius: ${({ hasBorderRadius, theme }) =>
    hasBorderRadius
      ? `0px 0px ${theme.newBorderRadius.l} ${theme.newBorderRadius.l}`
      : '0px'};
`;
