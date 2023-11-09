import { Meta, StoryObj } from '@storybook/react';
import { themeDefault } from 'src/themes';
import { YoYoBar } from '../YoYoBar';
import { YoYoBarProps } from '../YoYoBar.types';

const dummyCardData = [
  {
    desktopHtmlString:
      '<span>Unimaginable places within reach up to 50% off</span>',
    mobileHtmlString: '<span>Unimaginable places up to 50% off</span>',
    tagText: 'Ends soon!',
    isClickable: false,
  },
  {
    desktopHtmlString: '<span>Become an exoticca member in one click</span>',
    mobileHtmlString: '<span>Become an exoticca member</span>',
    tagText: 'Earn $100',
    plusInfo: '+ info',
    onClick: () => window.alert('slide 2 click event'),
    isClickable: true,
  },
];

const Meta: Meta<typeof YoYoBar> = {
  title: 'Components/YoYoBar',
  component: YoYoBar,
  args: {
    cardData: dummyCardData,
    interval: 8,
    background: 'promotion',
    backgroundShade: 'main',
    pillColor: 'primary',
  },
  argTypes: {
    interval: {
      desciption: 'Interval between slide changes',
      control: 'number',
    },
    background: {
      options: themeDefault.palette,
      control: { type: 'select' },
    },
  },
};

export default Meta;

type Story = StoryObj<YoYoBarProps>;

const Default = ({ ...args }: YoYoBarProps) => {
  return (
    <div>
      <YoYoBar {...args} />
    </div>
  );
};

export const Base: Story = {
  render: (args) => <Default {...args} />,
};
