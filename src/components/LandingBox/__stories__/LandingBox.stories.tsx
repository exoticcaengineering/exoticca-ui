import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Typography } from 'src/components/Typography';
import { LandingBox } from '../LandingBox';

export default {
  title: 'Components/UI/LandingBox',
  component: LandingBox,
} as ComponentMeta<typeof LandingBox>;

const Template: ComponentStory<typeof LandingBox> = (args) => (
  <LandingBox {...args}>
    <Typography>
      Landing Box is a component extends from Box component,with an extra style,
      which has a line in the top, works as a container as well
    </Typography>
    <Typography>
      You can customize the top line color by passing topLineColor prop
    </Typography>
    <Typography>
      You can customize the background color , border , padding ect. like the
      Box component
    </Typography>
  </LandingBox>
);

export const Base = Template.bind({});

Base.args = {};

export const CustomTopLineColor = Template.bind({});
CustomTopLineColor.args = {
  topLineColor: 'blue20',
};

export const WithBorderNoBcg = Template.bind({});
WithBorderNoBcg.args = {
  background: 'transparent',
  borderColor: 'blue20',
};
