import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { MouseEventHandler, useState } from 'react';
import { Banner } from './Banner';
import { Props } from '../Button.types';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    text: 'I am a button',
    size: 'medium',
    color: 'black',
    shape: 'rounded',
    state: 'default',
    variant: 'primary',
  },
  argTypes: {
    color: {
      options: [
        'black',
        'white',
        'promoOrange',
        'promoGreen',
        'promoYellow',
        'promoBlue',
      ],
      control: { type: 'select' },
      category: 'Prop',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      category: 'Prop',
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
      category: 'Prop',
    },
    isLoading: {
      options: [true, false],
      control: { type: 'radio' },
      category: 'Prop',
    },
    isDisabled: {
      options: [true, false],
      control: { type: 'radio' },
      category: 'Prop',
    },
    shape: {
      options: ['square', 'rounded'],
      control: { type: 'select' },
      category: 'Prop',
    },
  },
} as Meta<typeof Button>;

type StoryType = StoryObj<typeof Button>;

const Template = (props: Props) => {
  const [showBanner, setShowBanner] = useState(false);
  const [bannerPosition, setBannerPosition] = useState({ top: 0, left: 0 });

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const buttonElement = event.target as HTMLButtonElement;
    if (buttonElement !== null) {
      const buttonPosition = buttonElement.getBoundingClientRect();
      setBannerPosition({
        top: buttonPosition.top - 40,
        left: buttonPosition.left + buttonPosition.width / 2 - 60,
      });
      setShowBanner(true);

      setTimeout(() => {
        setShowBanner(false);
      }, 2000);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '5rem',
          width: '15rem',
          backgroundColor: '#e9e5e5',
          borderRadius: '10px',
        }}
      >
        <Button {...props} onClick={handleButtonClick} />
        {showBanner && (
          <Banner showBanner={showBanner} bannerPosition={bannerPosition} />
        )}
      </div>
    </div>
  );
};

export const Primary: StoryType = {
  args: {
    variant: 'primary',
  },
  render: Template,
};
export const Secondary: StoryType = {
  args: {
    variant: 'secondary',
  },
  render: Template,
};
export const Tertiary: StoryType = {
  args: {
    variant: 'tertiary',
  },
  render: Template,
};

export const WithStartIcon: StoryType = {
  args: {
    startIcon: {
      icon: 'calendar',
    },
  },
  render: Template,
};

export const WithStartIconLoading: StoryType = {
  args: {
    startIcon: {
      icon: 'calendar',
    },
    isLoading: true,
  },
  render: Template,
};

export const WithEndIcon: StoryType = {
  args: {
    endIcon: {
      icon: 'calendar',
    },
  },
  render: Template,
};

export const WithEndIconLoading: StoryType = {
  args: {
    endIcon: {
      icon: 'calendar',
    },
    isLoading: true,
  },
  render: Template,
};

export const Disabled: StoryType = {
  args: {
    isDisabled: true,
  },
  render: Template,
};
