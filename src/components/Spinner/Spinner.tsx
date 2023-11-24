import { StyledSpinnerWrapper } from './Spinner.styles';
import { FC } from 'react';
import { Props } from './Spinner.types';
import { Loader } from '../SvgIcons';

export const Spinner: FC<Props> = ({
  size = 'regular',
  color = 'primary',
  className,
  testId = 'spinner',
}) => {
  return (
    <StyledSpinnerWrapper data-testid={testId} className={className}>
      <Loader size={size} stroke={color} />
    </StyledSpinnerWrapper>
  );
};
