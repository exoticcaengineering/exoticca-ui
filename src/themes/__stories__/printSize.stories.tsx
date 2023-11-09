import { StoryObj, Meta } from '@storybook/react';
import { Box } from 'src/components/Box';

import { Typography } from 'src/components/Typography';
import { PrintSize as PrintSizeType } from 'src/types/theme';
import { printSize } from '../theme';

const meta: Meta<typeof Typography> = {
  title: 'Theme/Typography/PrintSize',
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

const ptStringToPx = (remString: string) => {
  const numberString = remString.replace(/pt/i, '');
  return Math.round(Number(numberString) * 1.3);
};

const printSizes = Object.keys(printSize) as Array<keyof PrintSizeType>;

const PrintSizeComponent = () => (
  <>
    {printSizes.map((key) => (
      <Box boxShadow="s" padding={[2]} gutterBottom={2} key={key}>
        <Typography printSize={key}>
          theme.typography.printSize.{key}:
        </Typography>
        <Typography printSize={key}>
          {`${printSize[key]}: ${ptStringToPx(printSize[key])}px`}
        </Typography>
      </Box>
    ))}
  </>
);

export const PrintSize: Story = {
  render: () => <PrintSizeComponent />,
};
