import { StoryObj, Meta } from '@storybook/react';
import { Box } from 'src/components/Box';
import { Typography } from 'src/components/Typography';
import { BorderRadius as BorderRadiusType } from 'src/types/theme';

import { themeDefault } from '../theme';
const Meta: Meta<typeof Box> = {
  title: 'Theme/BorderRadius',
  component: Box,
};

export default Meta;
type Story = StoryObj<typeof Box>;

const borderRadiusArray = Object.keys(themeDefault.borderRadius) as Array<
  keyof BorderRadiusType
>;

const Base = () => (
  <>
    {borderRadiusArray.map((radius) => (
      <Box
        borderRadius={radius}
        background="promotion"
        gutterBottom={2}
        key={radius}
      >
        <Typography align="center">theme.newBorderRadius.{radius}:</Typography>
        <Typography align="center">
          {themeDefault.newBorderRadius[radius]}
        </Typography>
      </Box>
    ))}
  </>
);

export const BorderRadius: Story = {
  render: () => <Base />,
};
