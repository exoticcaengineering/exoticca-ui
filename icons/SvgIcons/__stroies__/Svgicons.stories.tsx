import * as React from 'react';
import * as Icons from '../index';
import { IconWrapper, Props } from 'icons/IconWrapper';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from 'src/components/Box';
import { Flex } from 'src/components/Flex';

const meta: Meta<typeof IconWrapper> = {
  title: 'Icons',
  component: IconWrapper,
};

export default meta;

type Story = StoryObj<typeof IconWrapper>;

const AllIcons = (props: Props) => (
  <Flex gap={2} flexWrap="wrap">
    {Object.entries(Icons).map(([name, Icon]) => (
      <Box key={name} borderColor="primary" padding={2}>
        <div>{name}</div>
        <Icon {...props} />
      </Box>
    ))}
  </Flex>
);

export const Base: Story = {
  render: AllIcons,
};
