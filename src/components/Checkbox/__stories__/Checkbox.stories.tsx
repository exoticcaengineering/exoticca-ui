import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../Checkbox';
import { TextBody1 } from 'src/components/TypographyVariants';
import { Props } from '../Checkbox.types';
import { StyledColumnWrapper } from './Story.styles';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    name: 'checkbox',
    label: 'Checkbox label',
  },
} as Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

const CheckboxStates = (props: Props) => {
  return (
    <StyledColumnWrapper>
      <div>
        <TextBody1>Loading state</TextBody1>
        <Checkbox {...props} isLoading name="loading" />
      </div>

      <div>
        <TextBody1>Disabled state</TextBody1>
        <Checkbox {...props} disabled name="disabled" />
      </div>
      <div>
        <TextBody1>Error state</TextBody1>
        <Checkbox {...props} error name="error" />
      </div>
      <div>
        <TextBody1>Checked state</TextBody1>
        <Checkbox {...props} defaultChecked name="checked" />
      </div>

      <div>
        <TextBody1>Checked and Error state</TextBody1>
        <Checkbox {...props} error name="error" defaultChecked />
      </div>
    </StyledColumnWrapper>
  );
};

export const Base: Story = {};

export const States: Story = {
  render: CheckboxStates,
};
