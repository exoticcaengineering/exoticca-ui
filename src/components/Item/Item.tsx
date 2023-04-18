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
  iconSize = 'regular',
  onClick,
}) => {
  return (
    <StyledWrapper
      selected={selected}
      className={className}
      hover={hover}
      color={color}
      onClick={() => onClick?.()}
    >
      {startIcon && <Icon icon={startIcon} size={iconSize} />}
      {children}
      {endIcon && <Icon icon={endIcon} size={iconSize} />}
    </StyledWrapper>
  );
};
