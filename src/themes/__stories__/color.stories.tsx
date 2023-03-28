import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FC } from 'react';
import { Box } from 'src/components/Box';
import { Typography } from 'src/components/Typography';
import { Colors } from 'src/types/theme';

import { ThemeProvider } from 'styled-components';
import { colors as defaultThemeColors } from '../theme';
import {
  colors as journawaythemeColors,
  themeJournaway,
} from '../themeJournaway';
import {
  colors as promolandThemeColors,
  themePromoland,
} from '../themePromoland';
import {
  colors as secretEscapesThemeColors,
  themeSecretEscapes,
} from '../themeSecretEscapes';
import {
  StyledColorBlockTextWrapper,
  StyledColorWrapper,
  StyledColorBlock,
} from './themeStory.styles';
import { ColorBlockProps, ColorPaletteProps } from './themeStory.types';

const ColorBlock: FC<ColorBlockProps> = ({ colorName, colorValue }) => (
  <Box boxShadow="s" padding={[2]}>
    <StyledColorBlockTextWrapper>
      <Typography>theme.colors.{colorName}</Typography>
      <Typography>{colorValue}</Typography>
    </StyledColorBlockTextWrapper>

    <StyledColorBlock background={colorName} boxShadow="s" />
  </Box>
);

const ColorPalette: FC<ColorPaletteProps> = ({ colors }) => {
  const sortedColorKeys = (Object.keys(colors) as Array<keyof Colors>).sort();
  return (
    <StyledColorWrapper>
      {sortedColorKeys.map((colorName) => (
        <ColorBlock
          colorName={colorName}
          colorValue={colors[colorName]}
          key={colorName}
        />
      ))}
    </StyledColorWrapper>
  );
};

export default {
  title: 'Theme/Colors',
  component: ColorPalette,
} as ComponentMeta<typeof ColorPalette>;

const Template: ComponentStory<typeof ColorPalette> = (args) => (
  <ColorPalette {...args} />
);

export const DefaultColorPalette = Template.bind({});

DefaultColorPalette.args = {
  colors: defaultThemeColors,
};

export const JournawaythemeColorPalette = Template.bind({});

JournawaythemeColorPalette.decorators = [
  (Story) => (
    <ThemeProvider theme={themeJournaway}>
      <Story />
    </ThemeProvider>
  ),
];

JournawaythemeColorPalette.args = {
  colors: journawaythemeColors,
};

export const PromolandThemeColorPalette = Template.bind({});

PromolandThemeColorPalette.decorators = [
  (Story) => (
    <ThemeProvider theme={themePromoland}>
      <Story />
    </ThemeProvider>
  ),
];

PromolandThemeColorPalette.args = {
  colors: promolandThemeColors,
};

export const SecretEscapesThemeColorPalette = Template.bind({});

SecretEscapesThemeColorPalette.decorators = [
  (Story) => (
    <ThemeProvider theme={themeSecretEscapes}>
      <Story />
    </ThemeProvider>
  ),
];

SecretEscapesThemeColorPalette.args = {
  colors: secretEscapesThemeColors,
};
