import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const ArrowDownCircleIcon = WithIconWrapper(
  ({
    title = 'arrow-down-circle-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
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
        <path d="M7.999 14.667a6.667 6.667 0 1 0 0-13.334 6.667 6.667 0 0 0 0 13.334" />
        <path d="m5.332 8 2.667 2.667L10.665 8M8 5.333v5.334" />
      </g>
    </svg>
  ),
);
export default ArrowDownCircleIcon;
