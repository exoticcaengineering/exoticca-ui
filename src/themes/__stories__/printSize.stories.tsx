import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from 'src/components/Box';

import { Typography } from 'src/components/Typography';
import { PrintSize as PrintSizeType } from 'src/types/theme';
import { printSize } from '../theme';

export default {
  title: 'Theme/Typography/FontSize',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const ptStringToPx = (remString: string) => {
  const numberString = remString.replace(/pt/i, '');
  return Math.round(Number(numberString) * 1.3);
};

const printSizes = Object.keys(printSize) as Array<keyof PrintSizeType>;

export const PrintSize: ComponentStory<typeof Typography> = () => (
  <>
    {printSizes.map((key) => (
      <Box boxShadow="s" padding={[2]} gutterBottom={2} key={key}>
        <Typography fontSize={key}>
          theme.typography.printSize.{key}:
        </Typography>
        <Typography fontSize={key} color="exoticcaLogo">
          {`${printSize[key]}: ${ptStringToPx(printSize[key])}px`}
        </Typography>
      </Box>
    ))}
  </>
);
