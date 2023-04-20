import { FC } from 'react';
import { Props } from './Icon.types';

import { StyledWrapper } from './Icon.styles';
import { iconComponents } from './iconComponents';

export const Icon: FC<Props> = ({ icon, testId, ...props }) => {
  const defaultTestId = `${icon}-icon`;
  const IconComponent = iconComponents[icon];

  return (
    <StyledWrapper data-testid={testId || defaultTestId} {...props}>
      <IconComponent />
    </StyledWrapper>
  );
};
