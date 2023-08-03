import { StoryObj, Meta } from '@storybook/react';

import { RecommendedBox } from '../RecommendedBox';
import { Props } from '../RecommendedBox.types';
import { FC } from 'react';
import { Wrapper } from './Story.styles';

export default {
  title: 'Components/RecommendedBox',
  component: RecommendedBox,
  args: {
    children: 'RecommendedBox',
    onClick: undefined,
    recommendationText: 'Recommended',
  },
} as Meta<typeof RecommendedBox>;

type Story = StoryObj<typeof RecommendedBox>;

const BaseRecommendedBox: FC<Props> = (props) => (
  <Wrapper>
    <RecommendedBox {...props} />
  </Wrapper>
);

export const Base: Story = {
  args: {},
  render: (args) => <BaseRecommendedBox {...args} />,
};
