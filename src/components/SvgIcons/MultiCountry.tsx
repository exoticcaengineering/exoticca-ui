import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MultiCountryIcon = WithIconWrapper(
  ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 18.457V13.25M8 18.463V13.25M5.083 8l-1.597.959A1 1 0 0 0 3 9.816v9.668a1 1 0 0 0 1.514.857l2.91-1.745a1 1 0 0 1 1.114.058L11.4 20.8a1 1 0 0 0 1.2 0l2.862-2.146a1 1 0 0 1 1.115-.058l2.908 1.745A1 1 0 0 0 21 19.484V9.816a1 1 0 0 0-.485-.857L18.917 8M12 15.25v5.749M8 6a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v0"
      />
      <path
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 6c0 1.807 1.993 3.735 3.166 4.713.49.383 1.177.383 1.667 0C14.006 9.736 16 7.807 16 6"
      />
      <path
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.001 5.639a.25.25 0 1 1-.002.5.25.25 0 0 1 .002-.5"
      />
    </svg>
  ),
);
export default MultiCountryIcon;
