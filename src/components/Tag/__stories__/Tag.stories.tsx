import { Meta, StoryObj } from '@storybook/react';
import { Tag } from '../Tag';
import { Props } from '../Tag.types';
import { StyledRowWrapper } from './Story.styles';

export default {
  title: 'Components/Tag',
  component: Tag,
} as Meta<typeof Tag>;

type Story = StoryObj<typeof Tag>;

const VariantsStory = (props: Props) => {
  return (
    <StyledRowWrapper>
      <Tag {...props} text="Primary tag" variant="primary" />
      <Tag {...props} text="Secondary tag" variant="secondary" />
    </StyledRowWrapper>
  );
};

export const Variants: Story = {
  render: (args) => <VariantsStory {...args} />,
};
