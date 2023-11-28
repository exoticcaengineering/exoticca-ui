import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from '../WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const HoneymoonIcon = WithIconWrapper(
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
        d="M15.06 8.978c-2.145-1.287-4.757-.201-5.838 1.616-2.208 3.683 1.951 10.275 2.068 10.339M20.05 11.969c2.144 1.287 2.416 4.097 1.325 5.91-2.205 3.675-9.978 3.116-10.085 3.055"
      />
      <path
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.883 11.59a3.82 3.82 0 0 0-1.824-2.611M16.883 11.59c.777-.25 1.94-.36 3.167.38M14.083 8.563c.31-.848.42-1.722.219-2.558-.446-1.82-2.355-3.425-4.506-2.906a3.364 3.364 0 0 0-2.23 1.723 3.349 3.349 0 0 0-2.777-.51c-2.152.52-3.128 2.814-2.682 4.633.658 2.73 4.488 4.304 6.495 4.929"
      />
    </svg>
  ),
);
export default HoneymoonIcon;
