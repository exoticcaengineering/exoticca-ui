import { Meta, StoryObj } from '@storybook/react';
import { Header } from '../Header';
import { TextBody2 } from 'src/components/TypographyVariants';
import { Props } from '../Header.types';
import { SearchIcon } from 'src/components/SvgIcons';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    leftComponent: {
      description:
        'Instantiate a component and it will be displayed on the left side.',
    },

    centerComponent: {
      description:
        'Instantiate a component and it will be displayed on the center side.',
    },
    rightComponent: {
      description:
        'Instantiate a component and it will be displayed on the right side.',
    },
    background: {
      description:
        'Pass the background color you want to display. It will be displayed in the background.',
    },
    backgroundShade: {
      description:
        'Pass the background shade of the background color. By default, it will be displayed in the main shade',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

const BackgroundColor = (props: Props) => (
  <Header {...props} background="promotion" />
);

const LeftComponent = () => <TextBody2>Left</TextBody2>;
const CenterComponent = () => <TextBody2 as="span">center</TextBody2>;
const RightComponent = () => (
  <div>
    <SearchIcon size="regular" stroke="currentColor" />
    <TextBody2 as="span">right</TextBody2>
  </div>
);

/**
 * Header background can be changed by passing the background and backgroundShade props you want to display.
 */
export const Background: Story = {
  args: {
    leftComponent: <LeftComponent />,
    centerComponent: <CenterComponent />,
    rightComponent: <RightComponent />,
  },
  render: BackgroundColor,
};

export const LeftCenterRight: Story = {
  args: {
    leftComponent: <LeftComponent />,
    centerComponent: <CenterComponent />,
    rightComponent: <RightComponent />,
  },
};

export const LeftCenter: Story = {
  args: {
    leftComponent: <LeftComponent />,
    centerComponent: <CenterComponent />,
  },
};

export const LeftRight: Story = {
  args: {
    leftComponent: <LeftComponent />,
    rightComponent: <RightComponent />,
  },
};

export const CenterRight: Story = {
  args: {
    centerComponent: <CenterComponent />,
    rightComponent: <RightComponent />,
  },
};
