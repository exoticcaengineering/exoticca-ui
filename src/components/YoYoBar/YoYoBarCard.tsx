import {
  StyledTag,
  TextYoYobarDesktop,
  TextYoYobarInfo,
  TextYoYobarMobile,
  YoYoBarCardWrapper,
} from './YoYoBar.styles';
import { PromotionStylingYoBar } from './YoYoBar.types';

type Props = {
  styling?: PromotionStylingYoBar;
  isLastChance?: boolean;
  tagText: string | undefined;
  desktopHtmlString: string;
  mobileHtmlString: string;
  absolute?: boolean;
  onClick?: () => void;
  plusInfo?: string | undefined;
  interval: number;
};

const YoYoBarCard = ({
  tagText,
  desktopHtmlString,
  mobileHtmlString,
  plusInfo,
  interval,
  onClick,
}: Props) => {
  return (
    <YoYoBarCardWrapper
      data-test-id={'yoyobar-card'}
      interval={interval}
      onClick={onClick}
    >
      <TextYoYobarDesktop
        dangerouslySetInnerHTML={{
          __html: desktopHtmlString,
        }}
      />
      <TextYoYobarMobile
        dangerouslySetInnerHTML={{
          __html: mobileHtmlString,
        }}
      />
      {tagText && <StyledTag text={tagText} color="primary" size="small" />}
      <TextYoYobarInfo
        dangerouslySetInnerHTML={{
          __html: plusInfo || '',
        }}
      />
    </YoYoBarCardWrapper>
  );
};

export default YoYoBarCard;
