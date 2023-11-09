import { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '../Spinner';
import { StyledColumnWrapper } from './Story.styles';
import { TextBody1 } from 'src/components/TypographyVariants';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
};

export default meta;

type Story = StoryObj<typeof Spinner>;

const SpinnerSizes = () => {
  return (
    <StyledColumnWrapper>
      <div>
        <TextBody1>Regular size</TextBody1>
        <Spinner size="regular" />
      </div>
      <div>
        <TextBody1>medium size</TextBody1>
        <Spinner size="medium" />
      </div>
      <div>
        <TextBody1>Large size</TextBody1>
        <Spinner size="large" />
      </div>
    </StyledColumnWrapper>
  );
};

export const Sizes: Story = {
  render: SpinnerSizes,
};
