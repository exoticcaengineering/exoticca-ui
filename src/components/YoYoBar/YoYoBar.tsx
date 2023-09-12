import React, { useEffect, useState } from 'react';
import { YoYoBarWrapper } from './YoYoBar.styles';
import { YoYoBarProps } from './YoYoBar.types';
import { YoYoBarCard } from './YoYoBarCard';

export const YoYoBar: React.FC<YoYoBarProps> = ({
  interval,
  cardData,
  background,
  backgroundShade,
  containerRef,
  pillColor,
  textColor,
}) => {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);

  useEffect(() => {
    const transitionSlide = () => {
      const newIdx = (activeSlideIdx + 1) % cardData.length;
      setActiveSlideIdx(newIdx);
    };

    const slideTimer = setInterval(() => {
      transitionSlide();
    }, interval * 1000);

    return () => clearInterval(slideTimer);
  }, [activeSlideIdx, cardData.length, interval]);

  const slide = cardData[activeSlideIdx];

  return (
    <YoYoBarWrapper
      ref={containerRef}
      data-testid={'yoyobar-wrapper'}
      backgroundColor={background}
      backgroundShade={backgroundShade}
      isClickable={!!slide.isClickable}
      onClick={() => slide.onClick?.()}
    >
      <YoYoBarCard
        interval={8}
        desktopHtmlString={slide.desktopHtmlString}
        mobileHtmlString={slide.mobileHtmlString}
        tagText={slide.tagText}
        plusInfo={slide.plusInfo}
        pillColor={pillColor}
        textColor={textColor}
      />
    </YoYoBarWrapper>
  );
};
