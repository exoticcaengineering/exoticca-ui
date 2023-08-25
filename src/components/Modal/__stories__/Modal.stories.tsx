import { Meta, StoryObj } from '@storybook/react';
import { forwardRef, useRef } from 'react';
import { Modal } from '../Modal';
import { ModalRef } from '../Modal.types';
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

const BasicModal = () => {
  const ref = useRef<ModalRef>(null);
  return (
    <>
      <Button onClick={() => ref.current?.open()} text="Basic modal" />
      <Modal ref={ref} id="basicModal">
        <TextBody1>This is a closeable modal</TextBody1>
      </Modal>
    </>
  );
};
const WithHeaderModal = () => {
  const ref = useRef<ModalRef>(null);
  return (
    <>
      <Button onClick={() => ref.current?.open()} text="Modal with header" />
      <Modal ref={ref} id="withHeaderModal" header={<ModalHeader />}>
        <TextBody1>This is a modal with header</TextBody1>
      </Modal>
    </>
  );
};

const WithBottomActionButtonModal = () => {
  const ref = useRef<ModalRef>(null);
  return (
    <>
      <Button
        onClick={() => ref.current?.open()}
        text="Modal with action button at the bottom"
      />
      <Modal
        ref={ref}
        id="withBottomCloseButtonModal"
        header={<ModalHeader />}
        bottomActionButton={{
          text: 'Click here',
          onClick: () => alert('clicked'),
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

const LongContentModal = () => {
  const ref = useRef<ModalRef>(null);
  return (
    <>
      <Button onClick={() => ref.current?.open()} text="long content modal" />
      <Modal
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

const FullScreenModal = () => {
  const ref = useRef<ModalRef>(null);
  return (
    <>
      <Button onClick={() => ref.current?.open()} text="Full screen modal" />
      <Modal ref={ref} id="fullScreenModal" fullScreen>
        <TextBody1>This is a FullScreenModal modal</TextBody1>
      </Modal>
    </>
  );
};
const NonClosableModal = () => {
  const ref = useRef<ModalRef>(null);
  return (
    <>
      <Button onClick={() => ref.current?.open()} text="Non closeable modal" />
      <Modal ref={ref} id="nonClosableModal" isClosable={false}>
        <TextBody1>This is a closeable modal</TextBody1>
      </Modal>
    </>
  );
};

const Variants = () => {
  return (
    <StyledRowWrapper>
      <BasicModal />
      <WithHeaderModal />
      <WithBottomActionButtonModal />
      <LongContentModal />
      <FullScreenModal />
      <NonClosableModal />
    </StyledRowWrapper>
  );
};
export const ModalVariants: Story = {
  render: Variants,
};
