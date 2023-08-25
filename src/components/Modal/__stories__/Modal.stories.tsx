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

const BasicModal = forwardRef<ModalRef>((props, ref) => {
  return (
    <Modal ref={ref} id="basicModal">
      <TextBody1>This is a closeable modal</TextBody1>
    </Modal>
  );
});

const WithHeaderModal = forwardRef<ModalRef>((props, ref) => {
  return (
    <Modal ref={ref} id="withHeaderModal" header={<ModalHeader />}>
      <TextBody1>This is a modal with header</TextBody1>
    </Modal>
  );
});

const WithBottomActionButtonModal = forwardRef<ModalRef>((props, ref) => {
  return (
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam
        quaerat a. Placeatasdada distinctio earum eos sint maiores provident
        cumque vel facere adipisciasd asda officia, tempore consequuntur,
        corrupti voluptatum dignissimos commodidsad as?
      </TextBody1>
    </Modal>
  );
});

const LongContentModal = forwardRef<ModalRef>((props, ref) => {
  return (
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam
        quaerat a. Placeatasdada distinctio earum eos sint maiores provident
        cumque vel facere adipisciasd asda officia, tempore consequuntur,
        corrupti voluptatum dignissimos commodidsad as?
      </TextBody1>
      <TextBody1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam
        quaerat a. Placeatasdada distinctio earum eos sint maiores provident
        cumque vel facere adipisciasd asda officia, tempore consequuntur,
        corrupti voluptatum dignissimos commodidsad as?
      </TextBody1>
      <TextBody1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam
        quaerat a. Placeatasdada distinctio earum eos sint maiores provident
        cumque vel facere adipisciasd asda officia, tempore consequuntur,
        corrupti voluptatum dignissimos commodidsad as?
      </TextBody1>
      <TextBody1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam
        quaerat a. Placeatasdada distinctio earum eos sint maiores provident
        cumque vel facere adipisciasd asda officia, tempore consequuntur,
        corrupti voluptatum dignissimos commodidsad as?
      </TextBody1>
      <TextBody1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam
        quaerat a. Placeatasdada distinctio earum eos sint maiores provident
        cumque vel facere adipisciasd asda officia, tempore consequuntur,
        corrupti voluptatum dignissimos commodidsad as?
      </TextBody1>
      <TextBody1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam
        quaerat a. Placeatasdada distinctio earum eos sint maiores provident
        cumque vel facere adipisciasd asda officia, tempore consequuntur,
        corrupti voluptatum dignissimos commodidsad as?
      </TextBody1>
      <TextBody1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam
        quaerat a. Placeatasdada distinctio earum eos sint maiores provident
        cumque vel facere adipisciasd asda officia, tempore consequuntur,
        corrupti voluptatum dignissimos commodidsad as?
      </TextBody1>
      <TextBody1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum numquam
        quaerat a. Placeatasdada distinctio earum eos sint maiores provident
        cumque vel facere adipisciasd asda officia, tempore consequuntur,
        corrupti voluptatum dignissimos commodidsad as?
      </TextBody1>
    </Modal>
  );
});

const FullScreenModal = forwardRef<ModalRef>((props, ref) => {
  return (
    <Modal ref={ref} id="fullScreenModal" fullScreen>
      <TextBody1>This is a FullScreenModal modal</TextBody1>
    </Modal>
  );
});
const NonClosableModal = forwardRef<ModalRef>((props, ref) => {
  return (
    <Modal ref={ref} id="nonClosableModal" isClosable={false}>
      <TextBody1>This is a closeable modal</TextBody1>
    </Modal>
  );
});

const Template = () => {
  const basicModal = useRef<ModalRef>(null);
  const nonClosableModal = useRef<ModalRef>(null);
  const withHeaderModal = useRef<ModalRef>(null);
  const withBottomCloseButtonModal = useRef<ModalRef>(null);
  const longContentModal = useRef<ModalRef>(null);
  const fullScreenModal = useRef<ModalRef>(null);

  return (
    <div>
      <StyledRowWrapper>
        <Button onClick={() => basicModal.current?.open()} text="Basic modal" />

        <Button
          onClick={() => withHeaderModal.current?.open()}
          text="Modal with header"
        />
        <Button
          onClick={() => withBottomCloseButtonModal.current?.open()}
          text="Modal with close button at the bottom"
        />
        <Button
          onClick={() => longContentModal.current?.open()}
          text="long content modal"
        />
        <Button
          onClick={() => fullScreenModal.current?.open()}
          text="Full screen modal"
        />
        <Button
          onClick={() => nonClosableModal.current?.open()}
          text="Non closeable modal"
        />
      </StyledRowWrapper>

      <BasicModal ref={basicModal} />
      <WithHeaderModal ref={withHeaderModal} />
      <NonClosableModal ref={nonClosableModal} />
      <WithBottomActionButtonModal ref={withBottomCloseButtonModal} />
      <LongContentModal ref={longContentModal} />
      <FullScreenModal ref={fullScreenModal} />
    </div>
  );
};
export const Base: Story = {
  render: Template,
};
