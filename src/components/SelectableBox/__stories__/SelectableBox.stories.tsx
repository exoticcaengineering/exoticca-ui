import { StoryObj, Meta } from '@storybook/react';

import { SelectableBox } from '../SelectableBox';
import { Wrapper } from './Story.styles';
import { FC } from 'react';
import { Props } from '../SelectableBox.types';

export default {
  title: 'Components/SelectableBox',
  component: SelectableBox,
  args: {
    children: 'SelectableBox',
    onClick: undefined,
  },
} as Meta<typeof SelectableBox>;

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
    highlightText: 'recommended',
  },
  render: (args) => <WithWrapper {...args} />,
};

export const SelectedHighlightBox: Story = {
  args: {
    highlightText: 'recommended',
    isSelected: true,
  },
  render: (args) => <WithWrapper {...args} />,
};
