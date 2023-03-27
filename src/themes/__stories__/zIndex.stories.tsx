import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from 'src/components/Box';

import { Typography } from 'src/components/Typography';
import { ZIndex as ZIndexType } from 'styled-components';

import { zIndex } from '../theme';

export default {
  title: 'Theme/ZIndex',
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const ZIndex: ComponentStory<typeof Typography> = () => (
  <>
    {(Object.keys(zIndex) as Array<keyof ZIndexType>).map((key) => (
      <Box boxShadow="s" padding={[2]} gutterBottom={2} key={key}>
        <Typography>theme.zIndex.{key}:</Typography>
        <Typography>{zIndex[key]}</Typography>
      </Box>
    ))}
  </>
);
