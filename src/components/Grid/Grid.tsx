import { FC } from 'react';
import { Wrapper } from './Grid.styles';
import type { Props } from './Grid.types';

export const Grid: FC<Props> = ({
  testId = 'Grid-wrapper',
  height,
  children,
  rows = 3,
  columns = 3,
}) => {
  return (
    <Wrapper data-testid={testId} height={height} rows={rows} columns={columns}>
      {children}
    </Wrapper>
  );
};
