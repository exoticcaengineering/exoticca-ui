import { ComponentMeta, Story } from '@storybook/react';
import { ComponentProps, useRef } from 'react';
import { Modal } from '../Modal';
import { ModalRef } from '../Modal.types';
import { TextBody1 } from 'src/components/TypographyVariants';

export default {
  title: 'Components/Modal',
  component: Modal,
  args: {
    text: 'Drawer contents :), Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cumque fuga consectetur reprehenderit soluta nihil porro perspiciatis saepe, sint unde deleniti velit rem quae nobis quas provident atque in asperiores?',
    openHeight: 50,
  },
} as ComponentMeta<typeof Modal>;

const Template: Story = () => {
  const modalRef = useRef<ModalRef>(null);

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
        onClick={() => modalRef.current?.open()}
      >
        Open modal
      </div>
      <Modal ref={modalRef} id={'hello'}>
        <TextBody1>Hello, I am a modal</TextBody1>
      </Modal>
    </div>
  );
};
export const Base = Template.bind({});
