import { Meta, StoryObj } from '@storybook/react';
import { Typography } from 'src/components/Typography';
import { LandingBox } from '../LandingBox';
import { Props } from '../LandingBox.types';

const Meta: Meta<typeof LandingBox> = {
  title: 'Components/LandingBox',
  component: LandingBox,
};

export default Meta;

const Template = (args: Props) => (
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

type Story = StoryObj<typeof LandingBox>;

export const Base: Story = {
  render: (args) => <Template {...args} />,
};

export const CustomTopLineColor: Story = {
  args: {
    topLineColor: 'blue20',
  },
  render: (args) => <Template {...args} />,
};
