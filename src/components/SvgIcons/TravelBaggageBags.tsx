import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const TravelBaggageBagsIcon = WithIconWrapper(
  ({
    title = 'travel-baggage-bags-icon',
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
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M8 11V9a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-5M18 21v-1M18 7V4a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v3" />
        <path d="M6.025 14.3v-2.2a1.1 1.1 0 0 1 1.1-1.1h2.75a1.1 1.1 0 0 1 1.1 1.1v2.2" />
        <rect width={11} height={7.7} x={3} y={14.3} rx={1.65} />
      </g>
    </svg>
  ),
);
export default TravelBaggageBagsIcon;
