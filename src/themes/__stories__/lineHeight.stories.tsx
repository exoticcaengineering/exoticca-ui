import { StoryObj, Meta } from '@storybook/react';
import { Box } from 'src/components/Box';
import { Typography, TypographyProps } from 'src/components/Typography';

const meta: Meta<typeof Typography> = {
  title: 'Theme/Typography/LineHeight',
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

const Template = (props: TypographyProps) => (
  <Box>
    <Typography {...props}>line height</Typography>
    <Typography {...props}>line height</Typography>
    <Typography {...props}>line height</Typography>
  </Box>
);

export const TightLineHeight: Story = {
  args: {
    lineHeight: 'tight',
  },
  render: () => <Template />,
};

export const NormalLineHeight: Story = {
  args: {
    lineHeight: 'normal',
  },
  render: () => <Template />,
};
