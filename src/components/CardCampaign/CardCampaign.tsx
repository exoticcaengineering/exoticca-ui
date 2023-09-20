import React from 'react';
import {
  CardCampaignProps,
  FLASH_SALES_ALIAS,
  NEW_ALIAS,
  PROMOTED_ALIAS,
  Tag,
} from './CardCampaign.types';

import {
  Card,
  CardContent,
  CardLink,
  Days,
  Destination,
  HeaderContentWrapper,
  HeaderWrapper,
  HeadingCard,
  NewContent,
  PercentageSaving,
  PriceBeauty,
  PriceBeforeBeauty,
  PriceFrom,
  PriceRow,
  PriceWrapper,
  TagWrapper,
  ThemePromoTag,
  ThemePromoTagWrap,
  Title,
} from './CardCampaign.styles';
export const CardCampaign = ({
  id,
  image = [],
  destination,
  title,
  fromPriceBeautify,
  url,
  hasExtraNights,
  pricingPercentage,
  oldPrice,
  tagHeadLine,
  hasBorder,
  hasMargin,
  hasBorderRadius,
  pillTagClickEvent,
  isNew,
  daysText,
  fromText,
  newText,
  WishlistBtn,
}: CardCampaignProps) => {
  const isPromotedProduct = tagHeadLine?.some(
    (tag: Tag) =>
      tag.alias === PROMOTED_ALIAS || tag.alias === FLASH_SALES_ALIAS,
  );

  const pillTag = tagHeadLine?.filter(
    (tag: Tag) => tag.alias !== PROMOTED_ALIAS,
  )[0];

  const newTag = tagHeadLine?.find((tag: Tag) => tag.alias === NEW_ALIAS);

  const showNew =
    isNew &&
    (newTag ||
      tagHeadLine.length === 0 ||
      (tagHeadLine.length === 1 && tagHeadLine[0].alias === PROMOTED_ALIAS));

  const LinkWrapper = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => {
    const handleRedirect = () => {
      if (window) window.location.href = href;
    };
    if (href === '' || href === undefined) {
      return <>{children}</>;
    }
    return <span onClick={handleRedirect}>{children}</span>;
  };

  return (
    <Card data-testid={id}>
      <a href={url}>
        <CardLink data-testid="card-campaign-link">
          {pillTag && (
            <TagWrapper>
              <LinkWrapper href={pillTag?.uri ?? ''}>
                <ThemePromoTagWrap>
                  <ThemePromoTag onClick={() => pillTagClickEvent?.()}>
                    {pillTag.name}
                  </ThemePromoTag>
                </ThemePromoTagWrap>
              </LinkWrapper>
            </TagWrapper>
          )}

          {WishlistBtn}
          <HeaderWrapper>
            <img src={image[0].url ?? ''} alt={title} />
            <HeaderContentWrapper>
              <HeadingCard>
                <Destination>{destination} </Destination>
                <Days forwardedAs={'h5'}>
                  {hasExtraNights && `${fromText} `}
                  {daysText}
                </Days>
              </HeadingCard>
            </HeaderContentWrapper>
          </HeaderWrapper>
          <CardContent>
            <Title as="h4">{title}</Title>

            <PriceWrapper>
              <PriceRow>
                <PriceFrom>{fromText}</PriceFrom>
                {oldPrice && <PriceBeforeBeauty>{oldPrice}</PriceBeforeBeauty>}
              </PriceRow>
              <PriceRow>
                <PriceBeauty as="b">{fromPriceBeautify}</PriceBeauty>
                {pricingPercentage && (
                  <PercentageSaving isPromotedProduct={isPromotedProduct}>
                    -{pricingPercentage}
                  </PercentageSaving>
                )}
              </PriceRow>
            </PriceWrapper>
          </CardContent>
          {showNew && isNew ? (
            <NewContent
              hasBorder={hasBorder}
              hasMargin={hasMargin}
              hasBorderRadius={hasBorderRadius}
            >
              {newText}
            </NewContent>
          ) : null}
        </CardLink>
      </a>
    </Card>
  );
};
