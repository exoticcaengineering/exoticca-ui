import { FC } from 'react';
import { Props } from './Item.types';
import { StyledContent, StyledWrapper } from './Item.styles';
import { Icon } from 'src/components/Icon';

export const Item: FC<Props> = ({
  className,
  testId = 'item',
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
      onClick={(event) => onClick?.(event)}
      size={size}
      layout={layout}
      data-testid={testId}
    >
      <StyledContent>
        {startIcon && <Icon {...startIcon} />}
        {children}
      </StyledContent>
      {endIcon && <Icon {...endIcon} />}
    </StyledWrapper>
  );
};
