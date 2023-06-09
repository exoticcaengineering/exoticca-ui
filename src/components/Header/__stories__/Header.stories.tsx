import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from '../Header';
import { TextBody2 } from 'src/components/TypographyVariants';
import { Icon } from 'src/components/Icon';
import { Box } from 'src/components/Box';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    leftComponent: {
      description:
        'Instantiate a component and it will be displayed on the left side.',
      type: { required: false },
    },

    centerComponent: {
      description:
        'Instantiate a component and it will be displayed on the center side.',
      type: { required: false },
    },
    rightComponent: {
      description:
        'Instantiate a component and it will be displayed on the right side.',
      type: { required: false },
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
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />;
};

const LeftComponent = () => <TextBody2>Left</TextBody2>;
const CenterComponent = () => <TextBody2 as="span">center</TextBody2>;
const RightComponent = () => (
  <div>
    <Icon icon="search" size="regular" stroke="currentColor" />
    <TextBody2 as="span">right</TextBody2>
  </div>
);

export const LeftCenterRight = Template.bind({});

LeftCenterRight.args = {
  leftComponent: <LeftComponent />,
  centerComponent: <CenterComponent />,
  rightComponent: <RightComponent />,
};

export const LeftCenter = Template.bind({});

LeftCenter.args = {
  leftComponent: <LeftComponent />,
  centerComponent: <CenterComponent />,
};

export const LeftRight = Template.bind({});

LeftRight.args = {
  leftComponent: <LeftComponent />,
  rightComponent: <RightComponent />,
};

export const CenterRight = Template.bind({});

CenterRight.args = {
  centerComponent: <CenterComponent />,
  rightComponent: <RightComponent />,
};
