import { Meta, StoryObj } from '@storybook/react';
import { Box } from 'src/components/Box';
import { Typography } from 'src/components/Typography';
import { BoxShadow as BoxShadowType } from 'src/types/theme';
import { themeDefault } from '../theme';

const Meta: Meta<typeof Box> = {
  title: 'Theme/BoxShadow',
  component: Box,
};

export default Meta;

type Story = StoryObj<typeof Box>;

const boxShadowArray = Object.keys(themeDefault.boxShadow) as Array<
  keyof BoxShadowType
>;

const Base = () => (
  <>
    {boxShadowArray.map((shadow) => (
      <Box boxShadow={shadow} padding={[2]} gutterBottom={2} key={shadow}>
        <Typography align="center">theme.boxShadow.{shadow}:</Typography>
        <Typography align="center">{themeDefault.boxShadow[shadow]}</Typography>
      </Box>
    ))}
  </>
);

export const BoxShadow: Story = {
  render: () => <Base />,
};
