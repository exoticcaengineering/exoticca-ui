import React, { useEffect, useRef, useState } from 'react';
import { YoYoBarWrapper } from './YoYoBar.styles';
import { YoYoBarProps } from './YoYoBar.types';
import YoYoBarCard from './YoYoBarCard';

export const YoYoBar: React.FC<YoYoBarProps> = ({
  interval,
  cardData,
  offsetHideBar,
  styling,
}) => {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const yoyobarRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (window) {
      let prevScrollpos = window.pageYOffset;

      const handleScroll = () => {
        if (yoyobarRef.current === null) return;

        const currentScrollPos = window.pageYOffset;

        if (
          prevScrollpos > currentScrollPos ||
          currentScrollPos < offsetHideBar
        ) {
          yoyobarRef.current.style.height = '28px';
          yoyobarRef.current.style.opacity = '1';
        } else {
          yoyobarRef.current.style.height = '0';
          yoyobarRef.current.style.opacity = '1';
        }
        prevScrollpos = currentScrollPos;
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
      <YoYoBarWrapper
        ref={yoyobarRef}
        data-test-id={'yoyobar-wrapper'}
        backgroundColor={styling.backgroundColor}
        gradient={styling?.backgroundGradient}
        backgroundImage={`/assets/images/${styling?.background}`}
        isClickable={!!cardData[activeSlideIdx].isClickable}
        onClick={() => cardData[activeSlideIdx].onClick?.()}
      >
        <YoYoBarCard
          interval={8}
          styling={styling}
          desktopHtmlString={cardData[activeSlideIdx].desktopHtmlString}
          mobileHtmlString={cardData[activeSlideIdx].mobileHtmlString}
          tagText={cardData[activeSlideIdx].tagText}
          plusInfo={cardData[activeSlideIdx].plusInfo}
        />
      </YoYoBarWrapper>
    </>
  );
};
