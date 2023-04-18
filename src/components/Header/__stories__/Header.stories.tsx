import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from '../Header';
import { TextBody2 } from 'src/components/TypographyVariants';
import { Icon } from 'src/components/Icon';
import { Box } from 'src/components/Box';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />;
};

const LeftComponent = () => <TextBody2>Left</TextBody2>;
const CenterComponent = () => (
  <Box>
    <TextBody2 as="span">center</TextBody2>
  </Box>
);
const RightComponent = () => (
  <Box>
    <Icon icon="search" size="regular" stroke="arcticWind" />
    <TextBody2 as="span">right</TextBody2>
  </Box>
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
