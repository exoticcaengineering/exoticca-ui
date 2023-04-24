import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FC } from 'react';
import { Typography } from 'src/components/Typography';
import { ThemeProvider } from 'src/utils/styled';
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
          <Typography fontFamily={key} gutterBottom={1} color="exoticcaLogo">
            {fontFamily[key]}
          </Typography>
        </Box>
      ))}
    </>
  );
};

export default {
  title: 'Theme/Typography/FontFamily',
  component: Typography,
} as ComponentMeta<typeof TypographyContainer>;

const Template: ComponentStory<typeof TypographyContainer> = (args) => (
  <TypographyContainer {...args} />
);

//Theme Default
export const DefaultThemeFontFamily = Template.bind({});

DefaultThemeFontFamily.args = {
  fontFamily: defaultThemeFontFamily,
};
