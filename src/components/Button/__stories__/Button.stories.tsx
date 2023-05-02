import { ComponentMeta, ComponentStory } from '@storybook/react';
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
    state: {
      options: ['disabled', 'loading', 'default'],
      control: { type: 'select' },
      category: 'Prop',
    },
    shape: {
      options: ['square', 'rounded'],
      control: { type: 'select' },
      category: 'Prop',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (props: Props) => {
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
export const Base = Template.bind({});

export const WithStartIcon = Template.bind({});

WithStartIcon.args = {
  startIcon: {
    icon: 'arrow',
  },
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  endIcon: {
    icon: 'arrow',
  },
};

export const WithCenterIcon = Template.bind({});
WithCenterIcon.args = {
  centerIcon: {
    icon: 'arrow',
  },
};
