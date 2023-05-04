import { FC } from 'react';
import { Icon } from '../Icon';
import { StyledIconButtonWrapper } from './Button.styles';
import { IconButtonProps } from './Button.types';

export const IconButton: FC<IconButtonProps> = ({ icon, ...props }) => {
  return (
    <StyledIconButtonWrapper {...props}>
      <Icon {...icon} />
    </StyledIconButtonWrapper>
  );
};
