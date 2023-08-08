import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../Checkbox';
import { TextBody1 } from 'src/components/TypographyVariants';
import { Props } from '../Checkbox.types';
import { StyledColumnWrapper, StyledRowWrapper } from './Story.styles';
import { Icon } from 'src/components/Icon';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    name: 'checkbox-name',
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

const LabelComponent = () => {
  return (
    <div>
      <StyledRowWrapper>
        <Icon icon="adventure" />
        <TextBody1>Custom label with an icon component</TextBody1>
      </StyledRowWrapper>
      <TextBody1>Another paragraph</TextBody1>
    </div>
  );
};

export const Base: Story = {};

export const States: Story = {
  render: CheckboxStates,
};

export const CustomLabel: Story = {
  args: {
    customLabel: <LabelComponent />,
  },
};
