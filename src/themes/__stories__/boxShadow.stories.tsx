import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from 'src/components/Box';
import { Typography } from 'src/components/Typography';
import { BoxShadow as BoxShadowType } from 'styled-components';
import { themeDefault } from '../theme';

export default {
  title: 'Theme/BoxShadow',
  component: Box,
} as ComponentMeta<typeof Box>;

const boxShadowArray = Object.keys(themeDefault.boxShadow) as Array<
  keyof BoxShadowType
>;

export const BoxShadow: ComponentStory<typeof Box> = () => (
  <>
    {boxShadowArray.map((shadow) => (
      <Box boxShadow={shadow} padding={[2]} gutterBottom={2}>
        <Typography align="center">theme.boxShadow.{shadow}:</Typography>
        <Typography align="center" color="exoticcaLogo">
          {themeDefault.boxShadow[shadow]}
        </Typography>
      </Box>
    ))}
  </>
);
