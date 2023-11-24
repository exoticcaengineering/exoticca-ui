import { IconWrapper, Props as IconWrapperProps } from '../IconWrapper';
import type { SVGProps } from 'react';
import { SVGRProps } from './WithIconWrapper.types';

export const WithIconWrapper = (
  Component: (props: SVGProps<SVGSVGElement> & SVGRProps) => JSX.Element,
) => {
  return (props: IconWrapperProps) => (
    <IconWrapper {...props}>
      <Component />
    </IconWrapper>
  );
};
