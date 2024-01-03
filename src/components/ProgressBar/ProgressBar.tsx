import { FC, useEffect, useState } from 'react';
import { StyledProgressBarBcg } from './ProgressBar.styles';
import { Props } from './ProgressBar.types';

export const ProgressBar: FC<Props> = ({
  testId,
  className,
  value = 0,
  ...props
}) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(value);
  }, [progress]);
  return (
    <StyledProgressBarBcg
      data-testid={testId}
      className={className}
      value={progress}
      {...props}
    />
  );
};
