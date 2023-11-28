import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from '../WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FallIcon = WithIconWrapper(
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
      <ellipse
        cx={17}
        cy={9}
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        rx={5}
        ry={6}
      />
      <path
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.828 12.536a3.464 3.464 0 0 1-5.656 0 5.92 5.92 0 0 1 0-7.072 3.464 3.464 0 0 1 5.656 0M7 18v-8M17 18V9M21 18H3M11.5 21h1M15.735 21h1M20 21h1M3 21h1M7.265 21h1"
      />
    </svg>
  ),
);
export default FallIcon;
