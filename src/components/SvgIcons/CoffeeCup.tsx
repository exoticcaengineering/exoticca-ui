import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CoffeeCupIcon = WithIconWrapper(
  ({
    title = 'coffee-cup-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 25 24"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        stroke="#2A2A2A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path
          d="M4.497 10.5h12.005a1 1 0 0 1 1 1V14.5a6.002 6.002 0 0 1-6.002 6.003H9.499A6.002 6.002 0 0 1 3.496 14.5V11.5a1 1 0 0 1 1-1"
          clipRule="evenodd"
        />
        <path d="M14 7.498c-.666-.7-.666-1.8 0-2.5.668-.701.668-1.802 0-2.502M10.5 7.498c-.668-.7-.668-1.8 0-2.5.666-.701.666-1.802 0-2.502M6.998 7.498c-.667-.7-.667-1.8 0-2.5.667-.701.667-1.802 0-2.502M16.63 17.617l1.846-.422a3.897 3.897 0 0 0 3.028-3.799v0a2.897 2.897 0 0 0-2.897-2.897h-2.605" />
      </g>
    </svg>
  ),
);
export default CoffeeCupIcon;
