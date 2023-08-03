import { FC } from 'react';
import { Props } from './SelectableBox.types';
import { SelectedIconWrapper } from './SelectableBox.styles';
import { Icon } from '../Icon';
import { Box } from '../Box';

export const SelectableBox: FC<Props> = ({
  isSelected,
  children,
  ...boxProps
}) => {
  return (
    <Box
      borderColor="primary"
      borderColorShade={isSelected ? 'main' : 'light'}
      borderWidth={1}
      padding={[2]}
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
    </Box>
  );
};
