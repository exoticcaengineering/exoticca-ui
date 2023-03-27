import { FC } from 'react';
import { InnerWrapper, Wrapper } from './HeroWrapper.styles';
import { Props } from './HeroWrapper.types';

export const HeroWrapper: FC<Props> = ({
  children,
  className,
  testId,
  ...wrapperProps
}) => {
  return (
    <Wrapper
      className={className}
      data-test-id={testId || 'hero-wrapper'}
      {...wrapperProps}
    >
      <InnerWrapper>{children}</InnerWrapper>
    </Wrapper>
  );
};
