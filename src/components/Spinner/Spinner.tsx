import { Icon } from '../Icon/Icon';
import { StyledSpinnerWrapper } from './Spinner.styles';
import { FC } from 'react';
import { Props } from './Spinner.types';

export const Spinner: FC<Props> = ({
  size = 'regular',
  color = 'primary',
  className,
  testId = 'spinner',
}) => {
  return (
    <StyledSpinnerWrapper data-testid={testId} className={className}>
      <Icon icon="loader" stroke={color} size={size} />
    </StyledSpinnerWrapper>
  );
};
