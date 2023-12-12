import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MgmStepAirplaneIcon = WithIconWrapper(
  ({
    title = 'mgm-step-airplane-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <rect width={8} height={9} x={8} y={4} rx={4} />
        <path d="M12 2v2M11.25 7.5h1.5M22 9h-6M2 9h6M19 10.5V9M5 10.5V9M19 21l-1-7M5 21l1-7M10.75 17.5l2.5 2.5M13.25 17.5l-2.5 2.5" />
      </g>
    </svg>
  ),
);
export default MgmStepAirplaneIcon;
