import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEasterEgg = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      stroke="#323232"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.89 5.457A5.124 5.124 0 0 1 15 2.997c3.312 0 6.003 4.03 6.003 9.003 0 3.872-2.691 7.003-6.003 7.003a5.354 5.354 0 0 1-1.6-.25"
    />
    <path
      stroke="#323232"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.996 14c0 3.868 2.688 7.004 6.003 7.004S15 17.868 15 14c0-4.973-2.687-9.004-6.002-9.004s-6.003 4.031-6.003 9.004Z"
      clipRule="evenodd"
    />
    <path
      stroke="#323232"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3 15.5 2-2 2 2 2-2 2 2 2-2 2 2M14 10l2-2 2 2 2-2M15 13l1-1 2 2 3-3"
    />
    <circle cx={6.75} cy={10.75} r={0.75} fill="#323232" />
    <circle cx={10.75} cy={10.75} r={0.75} fill="#323232" />
    <circle cx={8.75} cy={17.75} r={0.75} fill="#323232" />
    <circle cx={4.75} cy={17.75} r={0.75} fill="#323232" />
    <circle cx={12.75} cy={17.75} r={0.75} fill="#323232" />
  </svg>
);
export default SvgEasterEgg;
