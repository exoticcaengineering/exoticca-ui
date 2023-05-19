import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, useRef } from 'react';
import { Drawer } from '../Drawer';
import { DrawerRef, Props } from '../Drawer.types';

export default {
  title: 'Components/Drawer',
  component: Drawer,
  argTypes: {
    openHeight: {
      control: 'number',
    },
  },
} as Meta<typeof Drawer>;

type CustomItemProps = ComponentProps<typeof Drawer> & {
  text: string;
  openHeight: number;
};

type Story = StoryObj<CustomItemProps>;

const Default = ({ openHeight = 50, ...args }: Props) => {
  const drawerRef = useRef<DrawerRef>(null);

  return (
    <div>
      <div
        style={{
          padding: '4px 20px',
          border: '2px solid black',
          backgroundColor: '#ffffff',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={() => drawerRef.current?.open()}
      >
        Open Drawer
      </div>
      <Drawer ref={drawerRef} openHeight={openHeight} {...args}>
        <h4>
          Drawer contents, Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Officia cumque fuga consectetur reprehenderit soluta nihil porro
          perspiciatis saepe, sint unde deleniti velit rem quae nobis quas
          provident atque in asperiores?
        </h4>
      </Drawer>
    </div>
  );
};
export const Base: Story = {
  render: (args) => <Default {...args} />,
};
