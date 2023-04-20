import { FC } from 'react';
import { Props } from './Item.types';
import { StyledWrapper } from './Item.styles';
import { Icon } from 'src/components/Icon';

export const Item: FC<Props> = ({
  className,
  hover,
  children,
  color,
  selected,
  startIcon,
  endIcon,
  onClick,
  size = 'medium',
}) => {
  return (
    <StyledWrapper
      selected={selected}
      className={className}
      hover={hover}
      color={color}
      onClick={() => onClick?.()}
      size={size}
    >
      {startIcon && <Icon {...startIcon} />}
      {children}
      {endIcon && <Icon {...endIcon} />}
    </StyledWrapper>
  );
};
