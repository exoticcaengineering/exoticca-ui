import { FC } from 'react';
import { Props } from './SelectableBox.types';
import { SelectedIconWrapper, StyledBox } from './SelectableBox.styles';
import { Icon } from '../Icon';

export const SelectableBox: FC<Props> = ({
  isSelected,
  children,
  ...boxProps
}) => {
  return (
    <StyledBox
      borderColor="background"
      borderColorShade={isSelected ? 'contrast' : 'light'}
      borderWidth={1}
      padding={[3, 2, 2, 2]}
      isSelected={isSelected}
      {...boxProps}
    >
      {children}
      {isSelected && (
        <SelectedIconWrapper>
          <Icon
            icon="check"
            stroke="background"
            strokeShade="main"
            rotate={-45}
          />
        </SelectedIconWrapper>
      )}
    </StyledBox>
  );
};
