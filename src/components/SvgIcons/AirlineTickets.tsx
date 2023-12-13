import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const AirlineTicketsIcon = WithIconWrapper(
  ({
    title = 'airline-tickets-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 17 16"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
      >
        <path d="M5.167 11.333H3.5c-.92 0-1.667-.746-1.667-1.666V4.333A1.667 1.667 0 0 1 3.5 2.667h7.333c.92 0 1.667.746 1.667 1.666v1" />
        <rect width={10} height={8} x={5.167} y={5.333} rx={2.5} />
        <path d="m8.167 9.999.593-.65-.593-.683M8.76 9.351l3.407-.018M9.5 7.499l1.333 1.833M9.5 11.166l1.333-1.834" />
      </g>
    </svg>
  ),
);
export default AirlineTicketsIcon;
