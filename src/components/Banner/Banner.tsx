import { FC } from 'react';
import { Wrapper } from './Banner.styles';
import type { Props } from './Banner.types';

export const Banner: FC<Props> = ({
  testId = 'Banner-wrapper',
  children,
  rows = 3,
  columns = 3,
  ...restProps
}) => {
  return (
    <Wrapper data-testid={testId} rows={rows} columns={columns} {...restProps}>
      {children}
    </Wrapper>
  );
};
