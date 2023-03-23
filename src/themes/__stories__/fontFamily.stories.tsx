import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FC } from 'react';
import { Typography } from 'src/components/Typography';
import { FontFamily, ThemeProvider } from 'styled-components';
import { themeJournaway } from '../themeJournaway';
import { themePromoland } from '../themePromoland';
import { themeSecretEscapes } from '../themeSecretEscapes';

import { fontFamily as defaultThemeFontFamily } from '../theme';
import { fontFamily as journawayThemeFontFamily } from '../themeJournaway';
import { fontFamily as secretEscapesThemeFontFamily } from '../themeSecretEscapes';
import { TypographyContainerProps } from './themeStory.types';
import { Box } from 'src/components/Box';

const TypographyContainer: FC<TypographyContainerProps> = ({ fontFamily }) => {
  const fontFamilies = Object.keys(fontFamily) as Array<keyof FontFamily>;
  return (
    <>
      {fontFamilies.map((key) => (
        <Box boxShadow="s" padding={[2]} gutterBottom={2}>
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

// Theme Journaway
export const JournawayThemeFontFamily = Template.bind({});

JournawayThemeFontFamily.decorators = [
  (Story) => (
    <ThemeProvider theme={themeJournaway}>
      <Story />
    </ThemeProvider>
  ),
];

JournawayThemeFontFamily.args = {
  fontFamily: journawayThemeFontFamily,
};

// Theme Promoland
export const PromolandThemeFontFamily = Template.bind({});

PromolandThemeFontFamily.decorators = [
  (Story) => (
    <ThemeProvider theme={themePromoland}>
      <Story />
    </ThemeProvider>
  ),
];

PromolandThemeFontFamily.args = {
  fontFamily: defaultThemeFontFamily,
};

// Theme Secret Escapes
export const SecretEscapesThemeFontFamily = Template.bind({});

SecretEscapesThemeFontFamily.decorators = [
  (Story) => (
    <ThemeProvider theme={themeSecretEscapes}>
      <Story />
    </ThemeProvider>
  ),
];

SecretEscapesThemeFontFamily.args = {
  fontFamily: secretEscapesThemeFontFamily,
};
