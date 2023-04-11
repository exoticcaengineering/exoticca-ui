import { FC } from 'react';
import { Props } from './Icon.types';

import { StyledWrapper } from './Icon.styles';
import { iconComponents } from './iconComponents';

export const Icon: FC<Props> = ({ icon, testId = 'icon', ...props }) => {
  const IconComponent = iconComponents[icon];
  return (
    <StyledWrapper data-testid={testId} {...props}>
      <IconComponent />
    </StyledWrapper>
  );
};
