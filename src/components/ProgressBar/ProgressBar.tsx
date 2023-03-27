import React, { FC } from 'react';
import { StyledProgressBarBcg } from './ProgressBar.styles';
import { Props } from './ProgressBar.types';

export const ProgressBar: FC<Props> = ({ testId, className, ...props }) => {
  return (
    <StyledProgressBarBcg
      data-testid={testId}
      className={className}
      {...props}
    />
  );
};
