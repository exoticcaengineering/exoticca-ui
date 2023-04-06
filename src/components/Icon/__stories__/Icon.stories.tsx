import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '../Icon';
import { StyledIconsWrapper } from './Icon.styles';
import { iconNames } from 'src/types/IconNames';
import { Box } from 'src/components/Box';
import { Typography } from 'src/components/Typography';

export default {
  title: 'Components/Icons',
  component: Icon,
  argTypes: {
    size: {
      options: ['small', 'regular', 'medium', 'large', 'xLarge', 'auto'],
      control: { type: 'radio' },
      defaultValue: 'large',
    },
  },
} as ComponentMeta<typeof Icon>;

export const Icons: ComponentStory<typeof Icon> = (args) => {
  return (
    <StyledIconsWrapper>
      {iconNames.map((iconName) => (
        <Box boxShadow="s" padding={[2]} background="cararra" key={iconName}>
          <Typography>{iconName}</Typography>
          <Icon {...args} icon={iconName} fill="savageForest" />
        </Box>
      ))}
    </StyledIconsWrapper>
  );
};
