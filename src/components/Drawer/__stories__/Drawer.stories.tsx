import { ComponentMeta, Story } from '@storybook/react';
import { ComponentProps, useRef } from 'react';
import { Drawer } from '../Drawer';
import { DrawerRef } from '../Drawer.types';

export default {
  title: 'Components/Drawer',
  component: Drawer,
  args: {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cumque fuga consectetur reprehenderit soluta nihil porro perspiciatis saepe, sint unde deleniti velit rem quae nobis quas provident atque in asperiores?',
    openHeight: 50,
  },
  argTypes: {
    text: {
      control: 'text',
    },
    openHeight: {
      control: 'number',
    },
  },
} as ComponentMeta<typeof Drawer>;

type CustomItemProps = ComponentProps<typeof Drawer> & {
  text: string;
  openHeight: number;
};

const Template: Story<CustomItemProps> = ({
  text,
  openHeight,
}: CustomItemProps) => {
  const drawerRef = useRef<DrawerRef>(null);

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#f3f3f3',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '10px',
      }}
    >
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
      <Drawer ref={drawerRef} openHeight={openHeight}>
        <h4>{text}</h4>
      </Drawer>
    </div>
  );
};
export const Base = Template.bind({});
