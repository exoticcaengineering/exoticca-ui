import * as React from 'react';
import type { SVGProps } from 'react';
import { WithIconWrapper } from 'src/components/WithIconWrapper';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LuxuryIcon = WithIconWrapper(
  ({
    title = 'luxury-icon',
    titleId,
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      data-testid={title}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <rect
        width={16}
        height={18}
        x={4}
        y={3}
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        rx={2}
      />
      <path
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 17h8"
      />
      <path
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.215 6.988a.875.875 0 0 1 1.57 0l.445.902a.875.875 0 0 0 .659.48l.995.144a.875.875 0 0 1 .486 1.492l-.721.703a.875.875 0 0 0-.252.774l.17.992a.875.875 0 0 1-1.27.923l-.89-.469a.875.875 0 0 0-.814 0l-.891.469a.875.875 0 0 1-1.27-.923l.17-.992a.875.875 0 0 0-.25-.774l-.722-.703a.875.875 0 0 1 .485-1.492l.996-.145a.875.875 0 0 0 .659-.479l.445-.902"
        clipRule="evenodd"
      />
    </svg>
  ),
);
export default LuxuryIcon;
