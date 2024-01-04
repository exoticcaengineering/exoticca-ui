import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const PlaneTakeOffClockIcon = WithIconWrapper(
  ({
    title = 'plane-take-off-clock-icon',
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
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M2.5 18h7" />
        <path
          d="M5.136 12.636 2.5 10l1.553-.776a1 1 0 0 1 .894 0L6.5 10l3.192-1.977-4.192-4L8.308 3 13.5 6l4.501-2.572a2.18 2.18 0 0 1 3.197 1.364v0a1.68 1.68 0 0 1-.766 1.849l-8.606 5.164a2 2 0 0 1-.7.257l-5.118.853a1 1 0 0 1-.872-.279"
          clipRule="evenodd"
        />
        <path d="m19.25 18.5-1.5-.937V15.8" />
        <circle cx={18} cy={17.5} r={4.5} />
      </g>
    </svg>
  ),
);
export default PlaneTakeOffClockIcon;
