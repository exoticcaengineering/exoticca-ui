import { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../Icon';
import { StyledIconsWrapper } from './Icon.styles';
import { iconNames } from 'src/types/IconNames';
import { Box } from 'src/components/Box';
import { Typography } from 'src/components/Typography';
import { Props } from '../Icon.types';

const Meta: Meta<typeof Icon> = {
  title: 'Components/Icons',
  component: Icon,
  argTypes: {
    size: {
      options: ['small', 'regular', 'medium', 'large', 'xLarge', 'auto'],
      control: { type: 'radio' },
      defaultValue: 'regular',
    },
    rotate: {
      control: { type: 'number' },
      defaultValue: 0,
    },
  },
};

export default Meta;

type Story = StoryObj<typeof Icon>;

export const AllIcons = (args: Props) => {
  return (
    <StyledIconsWrapper>
      {iconNames.map((iconName) => (
        <Box boxShadow="s" padding={[2]} key={iconName}>
          <Typography>{iconName}</Typography>
          <Icon {...args} icon={iconName} />
        </Box>
      ))}
    </StyledIconsWrapper>
  );
};

export const Icons: Story = {
  render: (args) => <AllIcons {...args} />,
};
