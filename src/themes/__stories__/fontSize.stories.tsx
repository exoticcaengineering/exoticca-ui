import { StoryObj, Meta } from '@storybook/react';
import { Box } from 'src/components/Box';

import { Typography } from 'src/components/Typography';
import { FontSize as FontSizeType } from 'src/types/theme';
import { fontSize } from '../theme';

const Meta: Meta<typeof Typography> = {
  title: 'Theme/Typography/FontSize',
  component: Typography,
};

export default Meta;
type Story = StoryObj<typeof Typography>;

const fontBase = 16;

const remStringToPx = (remString: string) => {
  const numberString = remString.replace(/rem/i, '');
  return Number(numberString) * fontBase;
};

const fontSizes = Object.keys(fontSize) as Array<keyof FontSizeType>;

const FontSizeComponent = () => (
  <>
    {fontSizes.map((key) => (
      <Box boxShadow="s" padding={[2]} gutterBottom={2} key={key}>
        <Typography fontSize={key}>theme.typography.fontSize.{key}:</Typography>
        <Typography fontSize={key}>
          {`${fontSize[key]}: ${remStringToPx(fontSize[key])}px`}
        </Typography>
      </Box>
    ))}
  </>
);

export const FontSize: Story = {
  render: () => <FontSizeComponent />,
};
