import { StoryObj, Meta } from '@storybook/react';
import { Box } from 'src/components/Box';

import { Typography } from 'src/components/Typography';
import { ZIndex as ZIndexType } from 'src/types/theme';

import { zIndex } from '../theme';

const Meta: Meta<typeof Typography> = {
  title: 'Theme/ZIndex',
  component: Typography,
};

export default Meta;
type Story = StoryObj<typeof Typography>;

export const ZIndexComponent = () => (
  <>
    {(Object.keys(zIndex) as Array<keyof ZIndexType>).map((key) => (
      <Box boxShadow="s" padding={[2]} gutterBottom={2} key={key}>
        <Typography>theme.zIndex.{key}:</Typography>
        <Typography>{zIndex[key]}</Typography>
      </Box>
    ))}
  </>
);

export const ZIndex: Story = {
  render: () => <ZIndexComponent />,
};
