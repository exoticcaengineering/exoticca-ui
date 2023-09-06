import { Meta, StoryObj } from '@storybook/react';
import { forwardRef, useRef } from 'react';
import { Modal } from '../Modal';
import { ModalRef, Props } from '../Modal.types';
import { TextBody1 } from 'src/components/TypographyVariants';
import { Button } from 'src/components/Button';
import { StyledModalHeader, StyledRowWrapper } from './Story.styles';

export default {
  title: 'Components/Modal',
  component: Modal,
  args: {},
} as Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

const ModalHeader = () => {
  return <StyledModalHeader>Modal header</StyledModalHeader>;
};

const BasicModal = (props: Props) => {
  const ref = useRef<ModalRef>(null);
  return (
    <>
      <Button onClick={() => ref.current?.open()} text="Basic modal" />
      <Modal {...props} ref={ref} id="basicModal">
        <TextBody1>This is a basic modal</TextBody1>
      </Modal>
    </>
  );
};
const WithHeaderModal = (props: Props) => {
  const ref = useRef<ModalRef>(null);
  return (
    <>
      <Button onClick={() => ref.current?.open()} text="Modal with header" />
      <Modal {...props} ref={ref} id="withHeaderModal" header={<ModalHeader />}>
        <TextBody1>This is a modal with header</TextBody1>
      </Modal>
    </>
  );
};

const WithBottomActionButtonModal = (props: Props) => {
  const ref = useRef<ModalRef>(null);
  return (
    <>
      <Button
        onClick={() => ref.current?.open()}
        text="Modal with action button at the bottom"
      />
      <Modal
        {...props}
        ref={ref}
        id="withBottomCloseButtonModal"
        header={<ModalHeader />}
        bottomActionButton={{
          text: props.bottomActionButton?.text || 'Click here',
          onClick: () =>
            props.bottomActionButton?.onClick?.() || alert('clicked'),
        }}
      >
        <TextBody1>This is a modal with close button at the bottom.</TextBody1>
        <TextBody1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          numquam quaerat a. Placeatasdada distinctio earum eos sint maiores
          provident cumque vel facere adipisciasd asda officia, tempore
          consequuntur, corrupti voluptatum dignissimos commodidsad as?
        </TextBody1>
      </Modal>
    </>
  );
};

const LongContentModal = (props: Props) => {
  const ref = useRef<ModalRef>(null);
  return (
    <>
      <Button onClick={() => ref.current?.open()} text="long content modal" />
      <Modal
        {...props}
        ref={ref}
        id="LongContentModal"
        bottomActionButton={{
          text: 'Click here',
          onClick: () => alert('clicked'),
        }}
      >
        <TextBody1>This is a modal has a very long content.</TextBody1>
        <TextBody1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorumadad
          numquam quaerat a. Placeatasdada distinctio earum eos sint maiores
          provident cumque vel facere adipisciasd asda officia, tempore
          consequuntur, corrupti voluptatum dignissimos commodidsad as?
        </TextBody1>
        <TextBody1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          numquam quaerat a. Placeatasdada distinctio earum eos sint maiores
          provident cumque vel facere adipisciasd asda officia, tempore
          consequuntur, corrupti voluptatum dignissimos commodidsad as?
        </TextBody1>
        <TextBody1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          numquam quaerat a. Placeatasdada distinctio earum eos sint maiores
          provident cumque vel facere adipisciasd asda officia, tempore
          consequuntur, corrupti voluptatum dignissimos commodidsad as?
        </TextBody1>
        <TextBody1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          numquam quaerat a. Placeatasdada distinctio earum eos sint maiores
          provident cumque vel facere adipisciasd asda officia, tempore
          consequuntur, corrupti voluptatum dignissimos commodidsad as?
        </TextBody1>
        <TextBody1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          numquam quaerat a. Placeatasdada distinctio earum eos sint maiores
          provident cumque vel facere adipisciasd asda officia, tempore
          consequuntur, corrupti voluptatum dignissimos commodidsad as?
        </TextBody1>
        <TextBody1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          numquam quaerat a. Placeatasdada distinctio earum eos sint maiores
          provident cumque vel facere adipisciasd asda officia, tempore
          consequuntur, corrupti voluptatum dignissimos commodidsad as?
        </TextBody1>
        <TextBody1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          numquam quaerat a. Placeatasdada distinctio earum eos sint maiores
          provident cumque vel facere adipisciasd asda officia, tempore
          consequuntur, corrupti voluptatum dignissimos commodidsad as?
        </TextBody1>
        <TextBody1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          numquam quaerat a. Placeatasdada distinctio earum eos sint maiores
          provident cumque vel facere adipisciasd asda officia, tempore
          consequuntur, corrupti voluptatum dignissimos commodidsad as?
        </TextBody1>
        <TextBody1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          numquam quaerat a. Placeatasdada distinctio earum eos sint maiores
          provident cumque vel facere adipisciasd asda officia, tempore
          consequuntur, corrupti voluptatum dignissimos commodidsad as?
        </TextBody1>
      </Modal>
    </>
  );
};

const FullScreenModal = (props: Props) => {
  const ref = useRef<ModalRef>(null);
  return (
    <>
      <Button onClick={() => ref.current?.open()} text="Full screen modal" />
      <Modal {...props} ref={ref} id="fullScreenModal" fullScreen>
        <TextBody1>This is a FullScreenModal modal</TextBody1>
      </Modal>
    </>
  );
};
const NonClosableModal = (props: Props) => {
  const ref = useRef<ModalRef>(null);
  return (
    <>
      <Button onClick={() => ref.current?.open()} text="Non closeable modal" />
      <Modal {...props} ref={ref} id="nonClosableModal" isClosable={false}>
        <TextBody1>This is a non closeable modal</TextBody1>
      </Modal>
    </>
  );
};

const Variants = (props: Props) => {
  return (
    <StyledRowWrapper>
      <BasicModal {...props} />
      <WithHeaderModal {...props} />
      <WithBottomActionButtonModal {...props} />
      <LongContentModal {...props} />
      <FullScreenModal {...props} />
      <NonClosableModal {...props} />
    </StyledRowWrapper>
  );
};

export const ModalVariants: Story = {
  render: Variants,
};

export const Basic: Story = {
  render: BasicModal,
};

export const WithHeader: Story = {
  render: WithHeaderModal,
};

export const WithBottomActionButton: Story = {
  render: WithBottomActionButtonModal,
};

export const LongContent: Story = {
  render: LongContentModal,
};

export const FullScreen: Story = {
  render: FullScreenModal,
};

export const NonClosable: Story = {
  render: NonClosableModal,
};
