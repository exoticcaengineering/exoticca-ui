import { StoryObj, Meta } from '@storybook/react';

import { SelectableBox } from '../SelectableBox';
import { Wrapper } from './Story.styles';
import { FC } from 'react';
import { Props } from '../SelectableBox.types';

const meta: Meta<typeof SelectableBox> = {
  title: 'Components/SelectableBox',
  component: SelectableBox,
  args: {
    children: 'SelectableBox',
    onClick: undefined,
    testId: 'selectable-box',
  },
};

export default meta;

type Story = StoryObj<typeof SelectableBox>;

const WithWrapper: FC<Props> = (props) => (
  <Wrapper>
    <SelectableBox {...props} />
  </Wrapper>
);

export const Base: Story = {
  args: {},
};

export const Selected: Story = {
  args: {
    isSelected: true,
  },
};

export const HighlightBox: Story = {
  args: {
    highlightConfig: {
      highlightText: 'recommended',
    },
  },
  render: (args) => <WithWrapper {...args} />,
};

export const SelectedHighlightBox: Story = {
  args: {
    highlightConfig: {
      highlightText: 'recommended',
    },
    isSelected: true,
  },
  render: (args) => <WithWrapper {...args} />,
};

export const ClickableBox: Story = {
  args: {
    onClick: () => alert('clicked'),
  },
  render: (args) => <WithWrapper {...args} />,
};

export const SelectedClickableBox: Story = {
  args: {
    onClick: () => alert('clicked'),
    isSelected: true,
  },
  render: (args) => <WithWrapper {...args} />,
};
