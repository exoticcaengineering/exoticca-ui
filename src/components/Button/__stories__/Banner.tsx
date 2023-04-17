import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const Banner = styled.div`
  position: absolute;
  top: 1rem;
  left: ${(props) => props.left}px;
  width: 120px;
  height: 40px;
  background-color: #333;
  color: #fff;
  text-align: center;
  line-height: 40px;
  font-size: 0.7rem;
  padding: 0 10px;
  border-radius: 5px;
  white-space: nowrap;
  opacity: ${(props) => (props.show ? 1 : 0)};
  animation: ${(props) =>
    props.show
      ? css`
          ${fadeIn} 1s
        `
      : css`
          ${fadeOut} 1s
        `};
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1rem;
`;

const BannerExample = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [bannerPosition, setBannerPosition] = useState({ top: 0, left: 0 });

  const handleButtonClick = (event) => {
    const buttonPosition = event.target.getBoundingClientRect();
    setBannerPosition({
      top: buttonPosition.top - 40,
      left: buttonPosition.left + buttonPosition.width / 2 - 60,
    });
    setShowBanner(true);

    setTimeout(() => {
      setShowBanner(false);
    }, 2000);
  };

  const handleBannerAnimationEnd = () => {
    if (!showBanner) {
      setBannerPosition({ top: 0, left: 0 });
    }
  };

  return (
    <>
      <Button onClick={handleButtonClick}>Click me!</Button>
      <Banner
        show={showBanner}
        onAnimationEnd={handleBannerAnimationEnd}
        top={bannerPosition.top}
        left={bannerPosition.left}
      >
        Button Clicked! 🚀
      </Banner>
    </>
  );
};

export default BannerExample;
