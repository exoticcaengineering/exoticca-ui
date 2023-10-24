import { Meta, StoryObj } from '@storybook/react';
import { Tag } from '../Tag';
import { Props } from '../Tag.types';
import { StyledRowWrapper } from './Story.styles';

export default {
  title: 'Components/Tag',
  component: Tag,
} as Meta<typeof Tag>;

type Story = StoryObj<typeof Tag>;

const SizesStory = (props: Props) => {
  return (
    <StyledRowWrapper>
      <Tag {...props} text="Small tag" size="small" />
      <Tag {...props} text="Medium tag" size="medium" />
    </StyledRowWrapper>
  );
};

const VariantsStory = (props: Props) => {
  return (
    <StyledRowWrapper>
      <Tag {...props} text="Primary tag" variant="primary" />
      <Tag {...props} text="Secondary tag" variant="secondary" />
    </StyledRowWrapper>
  );
};

const ShapesStory = (props: Props) => {
  return (
    <StyledRowWrapper>
      <Tag {...props} text="Square tag" shape="square" />
      <Tag {...props} text="Rounded tag" shape="rounded" />
    </StyledRowWrapper>
  );
};

const WithIconStory = (props: Props) => {
  return (
    <StyledRowWrapper>
      <Tag
        {...props}
        text="With start icon"
        variant="primary"
        startIcon={{ icon: 'travel-baggage' }}
      />
      <Tag
        {...props}
        text="With end icon"
        variant="secondary"
        endIcon={{ icon: 'travel-hand-baggage' }}
      />
    </StyledRowWrapper>
  );
};

export const Variants: Story = {
  render: (args) => <VariantsStory {...args} />,
};

/**
 * <p>In exoticca both square tag and rounded tag is rounded.</p>
 * <p>Because in exoticca theme, Both square border radius and rounded border radius is set to newBorderRaius.semi-rounded</p>
 * <p>Square tag is created for despegar use case, but is not used in exoticca currently</p>
 * <p>If in the future we need to use square tag in exoticca, we need to change the border radius of square tag</p>
 * */
export const Shapes: Story = {
  render: (args) => <ShapesStory {...args} />,
};

/**
 * <p>Tag can be both small and medium size</p>
 */
export const Sizes: Story = {
  render: (args) => <SizesStory {...args} />,
};

/**
 * <p>Tag can receive a start icon or a end icon</p>
 */
export const WithIcon: Story = {
  render: (args) => <WithIconStory {...args} />,
};
