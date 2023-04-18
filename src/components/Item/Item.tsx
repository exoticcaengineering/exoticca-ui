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
}) => {
  return (
    <StyledWrapper
      selected={selected}
      className={className}
      hover={hover}
      color={color}
    >
      {startIcon && <Icon icon={startIcon} size="regular" />}
      {children}
      {endIcon && <Icon icon={endIcon} size="regular" />}
    </StyledWrapper>
  );
};
