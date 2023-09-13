import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from 'src/components/Box';
import { Typography } from 'src/components/Typography';
import {
  Breakpoints as BreakpointsType,
  NewBreakpoints as NewBreakpointsType,
} from 'src/types/theme';
import { themeDefault } from '../theme';

export default {
  title: 'Theme/Breakpoint',
  component: Box,
} as ComponentMeta<typeof Box>;

const breakpointsArray = Object.keys(themeDefault.breakpoints) as Array<
  keyof BreakpointsType
>;

const newBreakpointsArray = Object.keys(themeDefault.newBreakpoints) as Array<
  keyof NewBreakpointsType
>;

export const Breakpoint: ComponentStory<typeof Box> = () => (
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

export const NewBreakpoint: ComponentStory<typeof Box> = () => (
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
