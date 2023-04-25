import { FC } from 'react';
import { Props } from './Item.types';
import { StyledContent, StyledWrapper } from './Item.styles';
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
  layout = 'flex-start',
}) => {
  return (
    <StyledWrapper
      selected={selected}
      className={className}
      hover={hover}
      color={color}
      onClick={() => onClick?.()}
      size={size}
      layout={layout}
    >
      <StyledContent>
        {startIcon && <Icon {...startIcon} />}
        {children}
      </StyledContent>
      {endIcon && <Icon {...endIcon} />}
    </StyledWrapper>
  );
};
