import {
  StyledTag,
  TextYoYobarDesktop,
  TextYoYobarInfo,
  TextYoYobarMobile,
  YoYoBarCardWrapper,
} from './YoYoBar.styles';
import { YoyoBarCarProps } from './YoYoBar.types';

export const YoYoBarCard = ({
  tagText,
  desktopHtmlString,
  mobileHtmlString,
  plusInfo,
  interval,
  onClick,
  textColor,
  pillColor,
}: YoyoBarCarProps) => {
  return (
    <YoYoBarCardWrapper
      data-testid={'yoyobar-card'}
      interval={interval}
      onClick={onClick}
    >
      <TextYoYobarDesktop
        color={textColor}
        dangerouslySetInnerHTML={{
          __html: desktopHtmlString,
        }}
      />
      <TextYoYobarMobile
        color={textColor}
        dangerouslySetInnerHTML={{
          __html: mobileHtmlString,
        }}
      />
      {tagText && <StyledTag text={tagText} color={pillColor} size="small" />}
      <TextYoYobarInfo
        color={textColor}
        dangerouslySetInnerHTML={{
          __html: plusInfo || '',
        }}
      />
    </YoYoBarCardWrapper>
  );
};
