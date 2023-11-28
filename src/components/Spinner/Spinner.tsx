import { StyledSpinnerWrapper } from './Spinner.styles';
import { FC } from 'react';
import { Props } from './Spinner.types';
import { LoaderIcon } from 'src/components/SvgIcons/Loader';

export const Spinner: FC<Props> = ({
  size = 'regular',
  color = 'primary',
  className,
  testId = 'spinner',
}) => {
  return (
    <StyledSpinnerWrapper data-testid={testId} className={className}>
      <LoaderIcon size={size} stroke={color} />
    </StyledSpinnerWrapper>
  );
};
