import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from 'src/components/Box';
import { Typography } from 'src/components/Typography';
import { FontWeight as FontWeightType } from 'styled-components';
import { fontWeight } from '../theme';

export default {
  title: 'Theme/Typography/FontWeight',
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const FontWeight: ComponentStory<typeof Typography> = () => (
  <>
    {(Object.keys(fontWeight) as Array<keyof FontWeightType>).map((key) => (
      <Box boxShadow="s" padding={[2]} gutterBottom={2}>
        <Typography fontWeight={key}>
          theme.typography.fontWeight.{key}:
        </Typography>
        <Typography fontWeight={key} color="exoticcaLogo">
          {fontWeight[key]}
        </Typography>
      </Box>
    ))}
  </>
);
