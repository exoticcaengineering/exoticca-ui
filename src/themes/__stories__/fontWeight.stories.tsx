import { StoryObj, Meta } from '@storybook/react';
import { Box } from 'src/components/Box';

import { Typography } from 'src/components/Typography';
import { FontWeight as FontWeightType } from 'src/types/theme';
import { fontWeight } from '../theme';

const Meta: Meta<typeof Typography> = {
  title: 'Theme/Typography/FontWeight',
  component: Typography,
};

export default Meta;
type Story = StoryObj<typeof Typography>;

const FontWeightComponent = () => (
  <>
    {(Object.keys(fontWeight) as Array<keyof FontWeightType>).map((key) => (
      <Box boxShadow="s" padding={[2]} gutterBottom={2} key={key}>
        <Typography fontWeight={key}>
          theme.typography.fontWeight.{key}:
        </Typography>
        <Typography fontWeight={key}>{fontWeight[key]}</Typography>
      </Box>
    ))}
  </>
);

export const FontWeight: Story = {
  render: () => <FontWeightComponent />,
};
