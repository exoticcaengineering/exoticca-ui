import { BannerWrapper } from './Banner.styles';
import { BannerProps } from './Banner.types';

export const Banner = ({ showBanner, bannerPosition }: BannerProps) => {
  return (
    <>
      <BannerWrapper
        show={showBanner}
        top={bannerPosition.top}
        left={bannerPosition.left}
      >
        Clicked! 🚀
      </BannerWrapper>
    </>
  );
};
