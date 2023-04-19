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
      {startIcon && (
        <Icon
          icon={startIcon.name}
          size={startIcon.size}
          fill={startIcon.fill}
          stroke={startIcon.stroke}
        />
      )}
      {children}
      {endIcon && (
        <Icon
          icon={endIcon.name}
          size={endIcon.size}
          fill={endIcon.fill}
          stroke={endIcon.stroke}
        />
      )}
    </StyledWrapper>
  );
};
