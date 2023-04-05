import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from 'src/components/Box';
import { Typography } from 'src/components/Typography';

export default {
  title: 'Theme/Typography/LineHeight',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (props) => (
  <Box>
    <Typography {...props}>line height</Typography>
    <Typography {...props}>line height</Typography>
    <Typography {...props}>line height</Typography>
  </Box>
);

export const TightLineHeight = Template.bind({});
TightLineHeight.args = {
  lineHeight: 'tight',
};

export const NormalLineHeight = Template.bind({});
NormalLineHeight.args = {
  lineHeight: 'normal',
};
