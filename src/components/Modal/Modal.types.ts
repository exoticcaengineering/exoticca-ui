import { ComponentPropsBaseWithChildren } from 'src/types/ComponentPropsBase';

export type ModalRef = { open(): void; close(): void };

export interface Props extends ComponentPropsBaseWithChildren {
  id: string;
  header?: JSX.Element;
  BottomCloseButtonText?: string;
  fullScreen?: boolean;
  isClosable?: boolean;
  disableCloseOnClickOutside?: boolean;
  onOpenCallback?(): void;
  onCloseCallback?(): void;
}

export interface StyledProps extends Pick<Props, 'fullScreen'> {
  hasBottomCloseButton?: boolean;
  shouldHaveContentExtraTopPadding?: boolean;
}
