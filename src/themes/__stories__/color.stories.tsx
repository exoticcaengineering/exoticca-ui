import { StoryObj, Meta } from '@storybook/react';
import { FC } from 'react';
import { Box } from 'src/components/Box';
import { Typography } from 'src/components/Typography';
import { Palette } from 'src/types/theme';
import { palette } from '../theme';

import {
  StyledColorBlockTextWrapper,
  StyledColorBlock,
  StyledColumnWrapper,
  StyledRowWrapper,
} from './themeStory.styles';
import { ColorBlockProps, ColorPaletteProps } from './themeStory.types';

const ColorBlock: FC<ColorBlockProps> = ({
  colorName,
  colorValue,
  colorShade,
}) => (
  <Box boxShadow="s" padding={[2]}>
    <StyledColorBlockTextWrapper>
      <Typography fontSize="heading2">{colorShade}</Typography>
      <Typography>{colorValue}</Typography>
    </StyledColorBlockTextWrapper>

    <StyledColorBlock
      background={colorName}
      backgroundShade={colorShade}
      boxShadow="s"
    />
  </Box>
);

const ColorPalette: FC<ColorPaletteProps> = ({ colors }) => {
  const colorKeys = Object.keys(colors) as Array<keyof Palette>;
  return (
    <StyledColumnWrapper>
      {colorKeys.map((colorName) => (
        <StyledColumnWrapper key={colorName}>
          <Typography fontSize="heading1">{colorName}</Typography>
          <StyledRowWrapper>
            <ColorBlock
              colorName={colorName}
              colorShade="main"
              colorValue={colors[colorName].main}
            />
            <ColorBlock
              colorName={colorName}
              colorShade="light"
              colorValue={colors[colorName].light}
            />
            <ColorBlock
              colorName={colorName}
              colorShade="medium"
              colorValue={colors[colorName].medium}
            />
            <ColorBlock
              colorName={colorName}
              colorShade="contrast"
              colorValue={colors[colorName].contrast}
            />
          </StyledRowWrapper>
        </StyledColumnWrapper>
      ))}
    </StyledColumnWrapper>
  );
};

const meta: Meta<typeof ColorPalette> = {
  title: 'Theme/Colors',
  component: ColorPalette,
};

export default meta;
type Story = StoryObj<typeof ColorPalette>;

export const BorderRadius: Story = {
  render: (args) => <ColorPalette {...args} colors={palette} />,
};
