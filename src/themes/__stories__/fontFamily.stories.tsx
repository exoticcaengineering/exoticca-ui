import { StoryObj, Meta } from '@storybook/react';
import { FC } from 'react';
import { Typography } from 'src/components/Typography';
import { FontFamily } from 'src/types/theme';

import { fontFamily as defaultThemeFontFamily } from '../theme';
import { TypographyContainerProps } from './themeStory.types';
import { Box } from 'src/components/Box';

const TypographyContainer: FC<TypographyContainerProps> = ({ fontFamily }) => {
  const fontFamilies = Object.keys(fontFamily) as Array<keyof FontFamily>;
  return (
    <>
      {fontFamilies.map((key) => (
        <Box boxShadow="s" padding={[2]} gutterBottom={2} key={key}>
          <Typography fontFamily={key} gutterBottom={1}>
            theme.typography.fontFamily{key}:
          </Typography>
          <Typography fontFamily={key} gutterBottom={1}>
            {fontFamily[key]}
          </Typography>
        </Box>
      ))}
    </>
  );
};

const meta: Meta<typeof TypographyContainer> = {
  title: 'Theme/Typography/FontFamily',
  component: TypographyContainer,
};

export default meta;
type Story = StoryObj<typeof Box>;

//Theme Default

export const DefaultThemeFontFamily: Story = {
  render: (args) => (
    <TypographyContainer {...args} fontFamily={defaultThemeFontFamily} />
  ),
};
