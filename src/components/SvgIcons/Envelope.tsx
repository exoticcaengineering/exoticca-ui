import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const EnvelopeIcon = WithIconWrapper(
  ({
    title = 'envelope-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 32"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M44.898 1.143a2.57 2.57 0 0 1 2.571 2.571v25.714a2.57 2.57 0 0 1-2.571 2.571H3.755a2.57 2.57 0 0 1-2.571-2.571V3.714a2.57 2.57 0 0 1 2.571-2.571h41.143zM18.58 15.803 4.098 30.285h40.437L30.06 15.81l-5.21 4.011a.86.86 0 0 1-1.046 0l-5.223-4.018zM45.753 3.744 31.431 14.759l14.322 14.322zm-42.855 0v25.317L17.209 14.75zm41.195-.887H4.557l19.769 15.204z" />
    </svg>
  ),
);
export default EnvelopeIcon;
