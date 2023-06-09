import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from 'src/components/Box';
import { Typography } from 'src/components/Typography';
import { BorderRadius as BorderRadiusType } from 'src/types/theme';

import { themeDefault } from '../theme';
export default {
  title: 'Theme/BorderRadius',
  component: Box,
} as ComponentMeta<typeof Box>;

const borderRadiusArray = Object.keys(themeDefault.borderRadius) as Array<
  keyof BorderRadiusType
>;

export const BorderRadius: ComponentStory<typeof Box> = () => (
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
