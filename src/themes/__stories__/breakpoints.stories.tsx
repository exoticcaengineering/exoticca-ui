import { StoryObj, Meta } from '@storybook/react';
import { Box } from 'src/components/Box';
import { Typography } from 'src/components/Typography';
import {
  Breakpoints as BreakpointsType,
  NewBreakpoints as NewBreakpointsType,
} from 'src/types/theme';
import { themeDefault } from '../theme';

const meta: Meta<typeof Box> = {
  title: 'Theme/Breakpoint',
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

const breakpointsArray = Object.keys(themeDefault.breakpoints) as Array<
  keyof BreakpointsType
>;

const newBreakpointsArray = Object.keys(themeDefault.newBreakpoints) as Array<
  keyof NewBreakpointsType
>;

const BreakpointsComponent = () => (
  <>
    {breakpointsArray.map((breakpoint) => (
      <Box boxShadow="s" padding={[2]} gutterBottom={2} key={breakpoint}>
        <Typography align="center">theme.breakpoints.{breakpoint}:</Typography>
        <Typography align="center">
          {themeDefault.breakpoints[breakpoint]}
        </Typography>
      </Box>
    ))}
  </>
);

const NewBreakpointsComponent = () => (
  <>
    {newBreakpointsArray.map((breakpoint) => (
      <Box boxShadow="s" padding={[2]} gutterBottom={2} key={breakpoint}>
        <Typography align="center">
          theme.newBreakpoints.{breakpoint}:
        </Typography>
        <Typography align="center" color="primary">
          {themeDefault.newBreakpoints[breakpoint]}
        </Typography>
      </Box>
    ))}
  </>
);

export const Breakpoints: Story = {
  render: () => <BreakpointsComponent />,
};

export const NewBreakpoints: Story = {
  render: () => <NewBreakpointsComponent />,
};
